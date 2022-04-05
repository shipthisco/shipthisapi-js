import { rm } from 'fs/promises';

(async () => rm('./dist', { recursive: true, force: true }))();
