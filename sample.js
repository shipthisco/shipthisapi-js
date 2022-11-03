import {ShipthisAPI} from "./dist/shipthisapi-js/main.js";

// let x_api_key = 'WyJhc2hpc2hrbXIyMjEwQGdtYWlsLmNvbSIsImRlbW8iXQ.YkboiA.85PdomGGEPA8i5SeDyI0leZ7sR0'

let param = {
    'userType': 'employee',
    'organisationId': 'demo',
}
let shipthisApi = new ShipthisAPI(param)
await shipthisApi.connect().then((data) => console.log(data)).catch((err) => err.message);

// Login via Email and Password
// await shipthisApi.loginViaPassword('abc@xyz.com', 'password');
//  'userType': 'customer',
//  'organisationId': 'shipthis'
// }
// let shipthisApi = new ShipthisAPI(param)
// const a = await shipthisApi.connect();
// const a = await shipthisApi.loginViaPassword('test@shipthis.co', 'password');

// console.log(shipthisApi.organisation);

// shipthisApi.customerUserRegistration("mayur@shipthis.co", 'abc12345', 'Mayur', 'rawte', 'Mayur', true)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log('in err')
//     console.log(err);
//   })
// // shipthisApi.Shipment.getAirShipment()
// // .then((data) => {
// //     console.log(data);
// // })

// Get all Shipment information
// shipthisApi.Shipment.getShipmentTerms("cfr")
// .then((data) => console.log("All Shipments : ",data)).catch((err) => err.message)


// Get all Air Shipments info
// url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/air_shipment?location=new_york
// shipthisApi.Shipment.getAirShipments()
// .then((data) => {
//     console.log(data);
// }).catch((err) => console.log(err.message))


// Get all Sea Shipments info
// url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/sea_shipment?location=new_york
// shipthisApi.Shipment.getSeaShipments()
// .then((data) => {
//     console.log(data);
// }).catch((err) => console.log(err.message))


// Get all Land Shipments info
// url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/land_shipment?location=new_york
// shipthisApi.Shipment.getLandShipments()
// .then((data) => {
//     console.log(data);
// }).catch((err) => console.log(err.message))


// ====
// Get Single Air shipment information
// url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/air_shipment/62febd45d3cb7fafac203f37
// shipthisApi.Shipment.getAirShipment("62febd45d3cb7fafac203f37").then((data) => console.log(data)).catch((err) => err.message)



// Update Air Shipments Details
// url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/air_shipment/62febd45d3cb7fafac203f37?location=new_york
// shipthisApi.Shipment.updateAirShipment("62febd45d3cb7fafac203f37")
// .then((data) => {
//     console.log(data);
// }).catch((err) => console.log(err.message))


// Create Air Shipments Details
// url :
// const requiredFieldsAir = {
//         "port_of_loading": {},
//         "port_of_discharge": {},
//         "job_id": "",
//         "shipment_name": "This is a test for Air Shipments",
//         "shipment_class": "house",
//         "customer_name": {},
//         "shipment_type": "import",
//         "shipment_term": {},
//         "carrier_code": "994",
//         "operation_executive": {}
// }
// const airPorts = await shipthisApi.Shipment.getAirPort()
// const getCustomers = await shipthisApi.Shipment.getCustomers()
// const shipTerms = await shipthisApi.Shipment.getShipmentTerms()
// const getExecutive = await shipthisApi.Shipment.getOperationExecutive()
// const getQuotationReference = await shipthisApi.Shipment.getQuotationReference()
// const getAirPort = await shipthisApi.Shipment.getAirPort()
// const getShipmentTerms = await shipthisApi.Shipment.getShipmentTerms()
// const getShipper= await shipthisApi.Shipment.getShipper("", "62f43e1ebca73696c1ac45d4")
// const getConsigneeName= await shipthisApi.Shipment.getConsigneeName("", "62f43e1ebca73696c1ac45d4")
// const getPickUpNDelivery = await shipthisApi.Shipment.getPickUpNDelivery("", "62f43e1ebca73696c1ac45d4")
// const getNotifyParty = await shipthisApi.Shipment.getNotifyParty("", "62f43e1ebca73696c1ac45d4")
// const getGoogleLocation = await shipthisApi.Shipment.getGoogleLocation()
// const getForwordingAgent = await shipthisApi.Shipment.getForwordingAgent()
// const getConsolidator = await shipthisApi.Shipment.getConsolidator("", "62f43e1ebca73696c1ac45d4")
// const getPlaceOfConsolidation = await shipthisApi.Shipment.getPlaceOfConsolidation()
// const getOperationExecutive = await shipthisApi.Shipment.getOperationExecutive()
// const getAirlineName = await shipthisApi.Shipment.getAirlineName()
// const getCurrency = await shipthisApi.Shipment.getCurrency()
// requiredFieldsAir.port_of_loading.port = airPorts.items[0]
// requiredFieldsAir.port_of_discharge.port = airPorts.items[1]
// requiredFieldsAir.customer_name = getCustomers.items[0]
// requiredFieldsAir.shipment_term = getShipmentTerms.items[0]
// requiredFieldsAir.operation_executive = getOperationExecutive.items[0]
// requiredFieldsAir.quotation_reference = getQuotationReference.items[0]
// const res = shipthisApi.Shipment.createAirShipment(requiredFieldsAir)
// console.log(res)



// Create Sea Shipment
// const requiredFieldsSea = {
//     "job_id": "",
//     "shipment_name": "This is a test for sea shipment",
//     "shipment_class": "house",
//     "customer_name": "",
//     "shipment_type": "import",
//     "shipment_term": {},
//     "operation_executive": {}
// }
// const getCustomers = await shipthisApi.Shipment.getCustomers()
// const getShipmentTerms = await shipthisApi.Shipment.getShipmentTerms()
// const getOperationExecutive = await shipthisApi.Shipment.getOperationExecutive()
// requiredFieldsSea.customer_name = getCustomers.items[0]
// requiredFieldsSea.shipment_term = getShipmentTerms.items[0]
// requiredFieldsSea.operation_executive = getOperationExecutive.items[0]
// url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/shipping_line?&only=name,carrier_code,cbsa_code,shipthis_code&general_filter={}&location=new_york&region_override=null
// const getShippingLineName  = await shipthisApi.Shipment.getShippingLineName()
// const res = shipthisApi.Shipment.createSeaShipment(requiredFieldsSea)


// create land shipment
// const requiredFieldsLand = {
//     "job_id": "",
//     "shipment_name": "This is a test for land shipment",
//     "shipment_class": "house",
//     "customer_name": "",
//     "shipment_type": "import",
//     "shipment_term": {},
//     "operation_executive": {}
// }
// const getCustomers = await shipthisApi.Shipment.getCustomers()
// const getShipmentTerms = await shipthisApi.Shipment.getShipmentTerms()
// const getOperationExecutive = await shipthisApi.Shipment.getOperationExecutive()
// requiredFieldsLand.customer_name = getCustomers.items[0]
// requiredFieldsLand.shipment_term = getShipmentTerms.items[0]
// requiredFieldsLand.operation_executive = getOperationExecutive.items[0]
// const res = shipthisApi.Shipment.createLandShipment(requiredFieldsLand)

// create new customer
// const createNewCustomer = {
//     "opening_balance": {},
//     "account_contact_person": {
//         "same_as_primary": false,
//         "additional_emails": [],
//         "enable_portal_access": false
//     },
//     "company": {
//         "is_agent": false,
//         "name": "Corgoson lativaaaaaaa",
//         "phone": "93848928993",
//         "client_code": "12334"
//     },
//     "primary_contact_person": {
//         "additional_emails": [],
//         "enable_portal_access": false,
//         "first_name": "shendue",
//         "last_name": "dneundure",
//         "name": "Dneundure",
//         "email": "cargoson@gmail.com"
//     },
//     "address": {
//         "city": {}
//     },
//     "__events": {
//         "lead__date": {
//             "$date": 1665532800000
//         },
//         "lead__comments": ""
//     },
//     "accounting": {
//         "credit_limit": 0,
//         "external_balance": 0,
//         "account_credit_block": false,
//         "block_reason": "Exceeded Credit Terms",
//         "currency": "inr",
//     },
//     "is_inter_branch": false,
//     "need_insurance": false,
//     "automatic_ar_reminder": {
//         "enable_automatic_reminder": false
//     },
//     "automatic_ar_aging_reminder": {
//         "enable_automatic_reminder": false
//     },
//     "notification": {
//         "sea_shipment": {},
//         "air_shipment": {},
//         "land_shipment": {},
//         "clearance_job": {},
//         "documentation_job": {}
//     },
//     "documents": [],
//     "customer_lifecycle": "lead",
//     "full_address": "\r\nE :cargoson@gmail.com\r\nT :93848928993",
//     "full_address_field_compute": ""
// }
// const createNew = await shipthisApi.Shipment.createCustomer(createNewCustomer)
// console.log(createNew)


// const createNewShipper = {
//     "company": {
//       "name": "new company consignee",
//       "phone": "+37166789012",
//       "party_type": ["consignee"],
//     },
//     "address": {
//       "line_1": "Dārzciema iela 60",
//       "city": {},
//       "pincode": "45365"
//     },
//     "primary_contact_person": {
//       "name": "Test Person",
//       "email": "rasmus@demo.example.com",
//       "phone": "+37166789012",
//       "first_name": "Test",
//       "last_name": "Person",
//     }
//   }
// const createNewShipperr = await shipthisApi.Shipment.createCustomerParty(createNewShipper, "6346bbcd2d632f192bdd1dca")
// console.log(createNewShipperr)



// get Quotation reference
// shipthisApi.Shipment.getQuotationReference().then((data) => console.log(data)).catch((err) => console.log(err));

// Miscellaneous functions
// shipthisApi.Shipment.getCustomers("mar").then((data) => console.log(data)).catch((err) => console.log(err.message))


// Delete the shipments
// shipthisApi.Shipment.createAirShipment("62febd45d3cb7fafac203f37").catch((err) => console.log(err.message))

// shipthisApi.getReportView(shipthisApi, 'invoice_manage', '1632700800000', '1664236799000', 'nasau', 'json', true, {
//   "user_filter": {
//     "entry_id": {
//       "type": "reference",
//       "value": "6331d88834cc212bfb7c75b4"
//     }
//   }
// })
//   .then((data) => {
//     console.log(data);
//   })


// Setup

// Categories Type

// const categoriesData = {
//   "__scp": {},
//   "name": "Shipthis.product123",
//   "code": "0088"
// }
// const res = await shipthisApi.Setup.getProductType(categoriesData)
// console.log(res)

// // port
// const categoriesData = {
//   "__scp": {},
//   "location": {
//       "description": "Bangalore, Karnataka, India",
//       "bold": "Bengaluru",
//       "lat": 12.9715987,
//       "lng": 77.5945627,
//       "query_type": "place_id",
//       "type": "city",
//       "province": "Karnataka",
//       "province_code": "KA",
//       "city": "Bengaluru",
//       "country": "India",
//       "country_code": "IN"
//   },
//   "custom": {
//       "new_port": "1233"
//   },
//   "name": "shipthis",
//   "code": "007",
//   "numeric_code": "123",
//   "latitude": 123,
//   "longitude": 1234
// }
// const res = await shipthisApi.Setup.getPort(categoriesData)
// console.log(res)


// AWB Block

// const AWBData = {
//     "__scp": {},
//     "available_count": 123312,
//     "used": [],
//     "used_count": 123312,
//     "all_counts": "",
//     "locked": false,
//     "no_of_digits": 8,
//     "used_codes": [],
//     "available": [
//     ],
//     "airline": "Adria Airways",
//     "acquired_on": {
//         "$date": 1665360000000
//     },
//     "valid_till": {
//         "$date": 1666051200000
//     },
//     "prefix": "123",
//     "start_number": 133,
//     "end_number": 123444
// }
// const res = await shipthisApi.Setup.getAWBBlock(AWBData)


// check for loads
// for Air Shipments there is only one type of load
// const packType = await shipthisApi.Shipment.getPackageTypeList("shipthis")
// const payload  = {
//     shipment: [
//       {
//         _cls_: 'air_shipment',
//         _id: {
//           $oid: '63511149890e3cc8aaf246bd',
//         },
//       },
//     ],
//     description: 'justt a text',
//     cbm_compute: '',
//     weight_unit: 'kg',
//     dimensions: [],
//     hazard_details: {
//       is_hazardous: false,
//     },
//     package_type: packType.items[0],
//     package_quantity: 0,
//     total_units: 0,
//     chargeable_wt: 0,
//     net_wt: 0,
//     gross_wt: 0,
//     cft: 0,
//     cbm: 0,
//     gross_wt_kg: 0,
//   };
// const res = await shipthisApi.Shipment.createAirLoad(payload)


// for Sea Shipments there are 4 types of loads
// 1. fcl loads
// 2. lcl loads
// 3. roro loads
// 4. bulk loads

// fcl sea loads
// const contType = await shipthisApi.Shipment.getContainerType("20FT")
// const packType = await shipthisApi.Shipment.getPackageTypeList("shipthis")
// const payload = {
//     shipment: [
//       {
//         _cls_: 'sea_shipment',
//         _id: {
//           $oid: '635227ca6504f38842343b00',
//         },
//       },
//     ],
//     description: '',
//     weight_unit: 'lb',
//     hazard_details: {
//       is_hazardous: false,
//     },
//     container_type: contType.items[0],
//     container_no: '',
//     gross_wt: 0,
//     net_wt: 0,
//     cbm: 0,
//     cft: 0,
//     seal_no: '',
//     custom_seal_no: '',
//     pickup_number: '',
//   }
//   const res = await shipthisApi.Shipment.createSeaFclLoad(payload)
//   console.log(res)


// for land shipments there are 3 types
// 1. fcl load
// 2. ftl load
// 3. ltl load

// const vehicleType = await shipthisApi.Shipment.getVehicleType("Shipthis")
// const payload = {
//     shipment: [
//       {
//         _cls_: 'land_shipment',
//         _id: {
//           $oid: '63522078f5affe81ef2e8ca6',
//         },
//       },
//     ],
//     description: 'testtt',
//     weight_unit: '',
//     hazard_details: {
//       is_hazardous: false,
//     },
//     packages: [
//       {
//         description: '',
//         length_unit: '',
//         weight_unit: '',
//         package_type: {},
//         package_quantity: 0,
//         length: 0,
//         width: 0,
//         height: 0,
//         cbm: 0,
//         cft: 0,
//         gross_wt: 0,
//         net_wt: 0,
//       },
//     ],
//     marks_and_no: '',
//     vehicle_type: vehicleType.items[0],
//     vehicle_no: '',
//     seal_no: '',
//     gross_wt: 0,
//     net_wt: 0,
//   };
//   const res = await shipthisApi.Shipment.createLandFtlLoad(payload)
//   console.log(res)


// get some shipments by giving count and page
// const filter = {
//   count : 20,
//   page : 1,
//   sort_by: "created_at",
//   sort_order: "dsc",
//   start_date: new Date(2021, 1, 1).getTime(),
//   end_date: new Date(2022, 1, 1).getTime(),
// }
// const res = await shipthisApi.Shipment.getSomeShipments(filter)
// console.log(res)

