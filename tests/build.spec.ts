import { ShipthisAPI } from '../dist/shipthisapi-js';
import { SeaShipment } from '../dist/shipthisapi-js/interfaces/collection.interface';


describe('shipthis api wrapper', () => {
  let shipthis: ShipthisAPI;
  let doc: any;

  // Act before assertions
  beforeAll(async () => {
    shipthis = new ShipthisAPI({
      x_api_key: 'WyJhc2hpc2hrbXIyMjEwQGdtYWlsLmNvbSIsImRlbW8iXQ.YkboiA.85PdomGGEPA8i5SeDyI0leZ7sR0',
      organisation_id: 'demo',
      user_type: 'employee'
    });
  });

  // Teardown (cleanup) after assertions
  afterAll(() => {
    shipthis = null;
  });

  it('can fetch initial configuration information', async () => {
    const infoResponse = await shipthis.getInfo();
    expect(infoResponse?.data?.data?.organisation).toBeTruthy();
    expect(infoResponse?.data?.data?.organisation?.regions?.length).toBeGreaterThanOrEqual(1);
  });

  it('get available locations', async () => {
    const locations = await shipthis.getAvailableLocations(true);
    shipthis.setLocation(locations[0]?.location_id);
    expect(locations?.length).toBeGreaterThanOrEqual(1);
  });

  it('can create a document in a collection', async () => {
    const payload = {
      "reqbody": {
        "__status": {},
        "port_of_loading.transit_time": "",
        "__events": {
          "opened__date": {
            "$date": 1649116800000
          },
          "opened__comments": ""
        },
        "enable_automated_tracking": false,
        "enable_inter_branch": false,
        "custom": {
          "Customer-ID": "asdfasdf"
        },
        "order_ref_no": [],
        "shipper_declared_value": {
          "amount": 0
        },
        "country_of_origin": {
          "description": "United States",
          "bold": "United States",
          "lat": 37.09024,
          "lng": -95.712891,
          "query_type": "place_id",
          "country": "United States",
          "country_code": "US",
          "city": "United States"
        },
        "insurance": {
          "need_insurance": false
        },
        "place_of_pickup": {
          "location": {}
        },
        "place_of_receipt": {
          "location": {}
        },
        "port_of_loading": {},
        "port_of_discharge": {},
        "port_of_destination": {},
        "place_of_delivery": {
          "location": {}
        },
        "final_destination": {},
        "operation_executive": {
          "_id": {
            "$oid": "5f55e0f4d7ed31000d6d963d"
          },
          "name": "Ankur",
          "__display": "Ankur",
          "email": "ankur@shipthis.co",
          "_cls_": "employee"
        },
        "forwarding_agent_show_on_master": false,
        "destination_agent_show_on_master": false,
        "has_switch_bl": false,
        "pod_documents": [],
        "skus": [],
        "under_watchlist": false,
        "notify_events_via_email": false,
        "tags": [],
        "documents": [],
        "customer_documents": [],
        "customer_uploaded_documents": [],
        "shipment_status": "opened",
        "job_id": "SEA000001",
        "shipment_class": "house",
        "customer_name": {
          "_id": {
            "$oid": "624b9e82ec99a4639f2591ef"
          },
          "company": {
            "name": "Ankur",
            "phone": "2093951293",
            "is_agent": false
          },
          "primary_contact_person": {
            "name": "Ankur Dutta",
            "email": "ankur@shipthis.co",
            "enable_portal_access": false,
            "first_name": "Ankur",
            "last_name": "Dutta",
            "additional_emails": []
          },
          "_cls_": "customer",
          "__display": "Ankur"
        },
        "shipment_term": {
          "_id": {
            "$oid": "602be55948c04c39742043e3"
          },
          "name": "DOOR TO PORT",
          "code": "DTP",
          "_cls_": "shipment_term",
          "_operation": {
            "edit": true,
            "delete": true
          },
          "__display": "DTP - DOOR TO PORT"
        },
        "shipment_type": "import",
        "shipment_name": "test shipment",
        "volume": ""
      },
      "action_op_data": {}
    };
    const created = (await shipthis.createCollectionItem('sea_shipment', JSON.stringify(payload)))
      ?.data?.data;
    doc = created;
    expect(created).toBeTruthy();
  });

  it('can fetch a collection of documents', async () => {
    const params = {
      count: 25,
      page: 1,
      multi_sort: [{"sort_by":"created_at","sort_order":"dsc"}],
      output_type: 'json',
      meta: false,
      query_filter_v2: [],
      general_filter: {"job_status":{"$nin":["closed","cancelled","ops_complete"]}},
      location: 'san_francisco',
      region_override: false
    }
    const documents = (await shipthis.getCollection<SeaShipment>('sea_shipment', params))
      ?.data?.data?.items;
    expect(documents?.length).toBeGreaterThanOrEqual(1);
  });

  it('can delete a document from a collection', async () => {
    const deleted: any = (await shipthis.deleteCollectionItem('sea_shipment', doc?._id?.$oid))
      ?.data;
    expect(deleted?.success).toBeTruthy();
  });
});
