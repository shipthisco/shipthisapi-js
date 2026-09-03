import { createServer, IncomingMessage, Server, ServerResponse } from 'http';
import { AddressInfo } from 'net';
import { internalRequest, uploadFile } from '../src/utils/request.js';
import { ShipthisAPI } from '../src/main.js';

interface CapturedRequest {
  method: string | undefined;
  url: string | undefined;
  headers: IncomingMessage['headers'];
  body: string;
}

let server: Server;
let baseUrl: string;
let captured: CapturedRequest[];
let respond: (req: CapturedRequest, res: ServerResponse) => void;

const readBody = (req: IncomingMessage): Promise<string> =>
  new Promise((resolve) => {
    const chunks: Buffer[] = [];
    req.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf-8')));
  });

const json = (res: ServerResponse, status: number, payload: unknown) => {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    'content-type': 'application/json',
    'content-length': Buffer.byteLength(body),
  });
  res.end(body);
};

/**
 * Minimal stand-in for ShipthisAPI: request.ts only reads these fields.
 */
const fakeApi = (overrides: Partial<ShipthisAPI> = {}): ShipthisAPI =>
  ({
    serverUrl: baseUrl,
    base_api_endpoint: baseUrl,
    file_upload_api_endpoint: `${baseUrl}/api/v3/file-upload`,
    organisationId: 'demo-org',
    userType: 'employee',
    selectedRegion: 'region-1',
    selectedLocation: 'location-1',
    xApiKey: 'test-api-key',
    authorization: undefined,
    isSessionValid: false,
    isConnectionValid: true,
    connectionErrorMessage: undefined,
    ...overrides,
  }) as unknown as ShipthisAPI;

beforeAll(async () => {
  server = createServer(async (req, res) => {
    const entry: CapturedRequest = {
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: await readBody(req),
    };
    captured.push(entry);
    respond(entry, res);
  });
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  baseUrl = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
});

afterAll(async () => {
  await new Promise<void>((resolve, reject) =>
    server.close((err) => (err ? reject(err) : resolve())),
  );
});

beforeEach(() => {
  captured = [];
  respond = (_req, res) => json(res, 200, { success: true, data: { ok: true } });
});

describe('internalRequest', () => {
  it('unwraps data.data on a successful GET', async () => {
    respond = (_req, res) =>
      json(res, 200, { success: true, data: { shipments: [{ id: 'S1' }] } });

    const result = await internalRequest(fakeApi(), 'get', '/shipment');

    expect(result).toEqual({ shipments: [{ id: 'S1' }] });
    expect(captured).toHaveLength(1);
    expect(captured[0].method).toBe('GET');
  });

  it('builds the v3 url and strips a leading slash from the path', async () => {
    await internalRequest(fakeApi(), 'get', '/shipment/list');
    expect(captured[0].url).toBe('/api/v3/shipment/list');

    captured = [];
    await internalRequest(fakeApi(), 'get', 'shipment/list');
    expect(captured[0].url).toBe('/api/v3/shipment/list');
  });

  it('sends identity headers, including x-api-key', async () => {
    await internalRequest(fakeApi(), 'get', 'info');

    const headers = captured[0].headers;
    expect(headers['organisation']).toBe('demo-org');
    expect(headers['usertype']).toBe('employee');
    expect(headers['region']).toBe('region-1');
    expect(headers['location']).toBe('location-1');
    expect(headers['x-api-key']).toBe('test-api-key');
    expect(headers['authorization']).toBeUndefined();
  });

  it('sends the authorization header when no api key is set', async () => {
    await internalRequest(
      fakeApi({ xApiKey: undefined, authorization: 'Bearer tok' }),
      'get',
      'info',
    );

    expect(captured[0].headers['authorization']).toBe('Bearer tok');
    expect(captured[0].headers['x-api-key']).toBeUndefined();
  });

  it('appends queryParams and serializes params', async () => {
    await internalRequest(fakeApi(), 'get', 'shipment', {
      queryParams: 'skip=0&limit=25',
      params: { sort: 'created_at', active: true },
    });

    const url = captured[0].url as string;
    expect(url.startsWith('/api/v3/shipment?skip=0&limit=25')).toBe(true);
    expect(url).toContain('sort=created_at');
    expect(url).toContain('active=true');
  });

  it('sends a JSON body for POST, PUT and PATCH', async () => {
    for (const method of ['post', 'put', 'patch'] as const) {
      captured = [];
      await internalRequest(fakeApi(), method, 'shipment', {
        requestData: { shipment_name: 'demo', nested: { a: 1 } },
      });

      expect(captured[0].method).toBe(method.toUpperCase());
      expect(captured[0].headers['content-type']).toContain('application/json');
      expect(JSON.parse(captured[0].body)).toEqual({
        shipment_name: 'demo',
        nested: { a: 1 },
      });
    }
  });

  it('sends an empty object body when a POST has no requestData', async () => {
    await internalRequest(fakeApi(), 'post', 'shipment');
    expect(JSON.parse(captured[0].body)).toEqual({});
  });

  it('does not send a body for GET', async () => {
    await internalRequest(fakeApi(), 'get', 'shipment');
    expect(captured[0].body).toBe('');
  });

  it('throws the first error message returned by the api', async () => {
    respond = (_req, res) =>
      json(res, 200, {
        success: false,
        data: {},
        errors: [{ message: 'Shipment not found' }],
      });

    await expect(internalRequest(fakeApi(), 'get', 'shipment/x')).rejects.toThrow(
      'Shipment not found',
    );
  });

  it('stringifies a non-string error message', async () => {
    respond = (_req, res) =>
      json(res, 200, {
        success: false,
        data: {},
        errors: [{ message: { code: 500 } }],
      });

    await expect(internalRequest(fakeApi(), 'get', 'shipment/x')).rejects.toThrow(
      JSON.stringify({ message: { code: 500 } }),
    );
  });

  it('rejects on a non-2xx response', async () => {
    respond = (_req, res) => json(res, 500, { success: false });
    await expect(internalRequest(fakeApi(), 'get', 'boom')).rejects.toThrow(
      /status code 500/,
    );
  });

  it('refuses to send when the session is valid but the connection is not', async () => {
    await expect(
      internalRequest(
        fakeApi({
          isSessionValid: true,
          isConnectionValid: false,
          connectionErrorMessage: 'Region Not Found',
        }),
        'get',
        'shipment',
      ),
    ).rejects.toThrow('Region Not Found');

    expect(captured).toHaveLength(0);
  });
});

describe('uploadFile', () => {
  it('posts the file as multipart/form-data under the "file" field', async () => {
    respond = (_req, res) => json(res, 200, { success: true, file_id: 'F1' });

    const file = new File(['hello,world\n'], 'report.csv', { type: 'text/csv' });
    const result = await uploadFile(fakeApi(), file);

    expect(result).toEqual({ success: true, file_id: 'F1' });
    expect(captured).toHaveLength(1);
    expect(captured[0].method).toBe('POST');
    expect(captured[0].url).toBe('/api/v3/file-upload');
    expect(captured[0].headers['content-type']).toMatch(
      /^multipart\/form-data; boundary=/,
    );
    expect(captured[0].body).toContain('name="file"');
    expect(captured[0].body).toContain('filename="report.csv"');
    expect(captured[0].body).toContain('hello,world');
  });

  it('escapes CRLF injection attempts in the filename', async () => {
    respond = (_req, res) => json(res, 200, { success: true });

    const file = new File(['x'], 'a"\r\nX-Injected: 1\r\n\r\n.csv', {
      type: 'text/csv',
    });
    await uploadFile(fakeApi(), file);

    const body = captured[0].body;
    expect(body).not.toContain('\r\nX-Injected: 1');
    expect(body).toContain('name="file"');
  });

  it('throws when the upload endpoint returns a non-2xx status', async () => {
    respond = (_req, res) => json(res, 502, { success: false });

    const file = new File(['x'], 'x.csv', { type: 'text/csv' });
    await expect(uploadFile(fakeApi(), file)).rejects.toThrow(/status code 502/);
  });
});

/**
 * The 1.18 axios advisories that touch this SDK are all in proxy resolution.
 * request.ts never sets `proxy`, so axios falls back to the environment.
 * These lock in that env-driven behaviour across axios upgrades.
 */
describe('proxy environment handling', () => {
  const envKeys = ['http_proxy', 'HTTP_PROXY', 'no_proxy', 'NO_PROXY'] as const;
  let saved: Record<string, string | undefined>;

  beforeEach(() => {
    saved = {};
    for (const key of envKeys) {
      saved[key] = process.env[key];
      delete process.env[key];
    }
  });

  afterEach(() => {
    for (const key of envKeys) {
      if (saved[key] === undefined) delete process.env[key];
      else process.env[key] = saved[key];
    }
  });

  it('bypasses the proxy for a host listed in NO_PROXY', async () => {
    process.env.HTTP_PROXY = 'http://127.0.0.1:1';
    process.env.NO_PROXY = '127.0.0.1';

    const result = await internalRequest(fakeApi(), 'get', 'info');

    expect(result).toEqual({ ok: true });
    expect(captured).toHaveLength(1);
  });

  it('routes through HTTP_PROXY when NO_PROXY does not match', async () => {
    // The local server doubles as the proxy: an absolute-form request-target
    // in the request line proves axios proxied rather than connected direct.
    process.env.HTTP_PROXY = baseUrl;

    const result = await internalRequest(
      fakeApi({ serverUrl: 'http://example.invalid' } as never),
      'get',
      'info',
    );

    expect(result).toEqual({ ok: true });
    expect(captured).toHaveLength(1);
    expect(captured[0].url).toBe('http://example.invalid/api/v3/info');
    expect(captured[0].headers['host']).toBe('example.invalid');
  });
});
