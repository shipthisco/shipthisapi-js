import { ShipthisAPI } from './main';

const shipthis = new ShipthisAPI({
  x_api_key: 'WyJhc2hpc2hrbXIyMjEwQGdtYWlsLmNvbSIsImRlbW8iXQ.YkboiA.85PdomGGEPA8i5SeDyI0leZ7sR0',
  organisation_id: 'demo',
  user_type: 'employee'
});

(async () => {
  // const infoResponse = await shipthis.getInfo();
  // console.log(infoResponse.status);
  const locations = await shipthis.getAvailableLocations(true);
  console.log(locations[0]);
  shipthis.setLocation(locations[0]?.location_id as string);
  // const params = {
  //   count: 25,
  //   page: 1,
  //   multi_sort: [{"sort_by":"created_at","sort_order":"dsc"}],
  //   output_type: 'json',
  //   meta: false,
  //   query_filter_v2: [],
  //   general_filter: {"job_status":{"$nin":["closed","cancelled","ops_complete"]}},
  //   location: 'san_francisco',
  //   region_override: false
  // }
  // console.log((await shipthis.getCollection<SeaShipment>('sea_shipment', params)).data)
  // const payload = {
  //   "reqbody": {
  //     "__status": {},
  //     "port_of_loading.transit_time": "",
  //     "__events": {
  //       "opened__date": {
  //         "$date": 1649116800000
  //       },
  //       "opened__comments": ""
  //     },
  //     "enable_automated_tracking": false,
  //     "enable_inter_branch": false,
  //     "custom": {
  //       "Customer-ID": "asdfasdf"
  //     },
  //     "order_ref_no": [],
  //     "shipper_declared_value": {
  //       "amount": 0
  //     },
  //     "country_of_origin": {
  //       "description": "United States",
  //       "bold": "United States",
  //       "lat": 37.09024,
  //       "lng": -95.712891,
  //       "query_type": "place_id",
  //       "country": "United States",
  //       "country_code": "US",
  //       "city": "United States"
  //     },
  //     "insurance": {
  //       "need_insurance": false
  //     },
  //     "place_of_pickup": {
  //       "location": {}
  //     },
  //     "place_of_receipt": {
  //       "location": {}
  //     },
  //     "port_of_loading": {},
  //     "port_of_discharge": {},
  //     "port_of_destination": {},
  //     "place_of_delivery": {
  //       "location": {}
  //     },
  //     "final_destination": {},
  //     "operation_executive": {
  //       "_id": {
  //         "$oid": "5f55e0f4d7ed31000d6d963d"
  //       },
  //       "name": "Ankur",
  //       "__display": "Ankur",
  //       "email": "ankur@shipthis.co",
  //       "_cls_": "employee"
  //     },
  //     "forwarding_agent_show_on_master": false,
  //     "destination_agent_show_on_master": false,
  //     "has_switch_bl": false,
  //     "pod_documents": [],
  //     "skus": [],
  //     "under_watchlist": false,
  //     "notify_events_via_email": false,
  //     "tags": [],
  //     "documents": [],
  //     "customer_documents": [],
  //     "customer_uploaded_documents": [],
  //     "shipment_status": "opened",
  //     "job_id": "SEA000001",
  //     "shipment_class": "house",
  //     "customer_name": {
  //       "_id": {
  //         "$oid": "624b9e82ec99a4639f2591ef"
  //       },
  //       "company": {
  //         "name": "Ankur",
  //         "phone": "2093951293",
  //         "is_agent": false
  //       },
  //       "primary_contact_person": {
  //         "name": "Ankur Dutta",
  //         "email": "ankur@shipthis.co",
  //         "enable_portal_access": false,
  //         "first_name": "Ankur",
  //         "last_name": "Dutta",
  //         "additional_emails": []
  //       },
  //       "_cls_": "customer",
  //       "__display": "Ankur"
  //     },
  //     "shipment_term": {
  //       "_id": {
  //         "$oid": "602be55948c04c39742043e3"
  //       },
  //       "name": "DOOR TO PORT",
  //       "code": "DTP",
  //       "_cls_": "shipment_term",
  //       "_operation": {
  //         "edit": true,
  //         "delete": true
  //       },
  //       "__display": "DTP - DOOR TO PORT"
  //     },
  //     "shipment_type": "import",
  //     "shipment_name": "falsjflasfd",
  //     "volume": ""
  //   },
  //   "action_op_data": {}
  // };
  // const created = await shipthis.createCollectionItem('sea_shipment', JSON.stringify(payload));
  // console.log(created)

  const deleted = await shipthis.deleteCollectionItem('sea_shipment', '624b9ea4877f35452f0a63cd');
  console.log(deleted);
})()

// import axios, { AxiosRequestConfig } from 'axios';
//
// const config: AxiosRequestConfig = {
//   method: 'get',
//   url: 'https://api.shipthis.co/api/v3/auth/info',
//   headers: { }
// };
//
// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
