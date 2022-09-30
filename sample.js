import { clear, Console, error } from "console";
import {ShipthisAPI} from "./dist/shipthisapi-js/main.js";

// let x_api_key = 'WyJhc2hpc2hrbXIyMjEwQGdtYWlsLmNvbSIsImRlbW8iXQ.YkboiA.85PdomGGEPA8i5SeDyI0leZ7sR0'


let param = {
    'userType': 'employee',
    'organisationId': 'demo',
    'xApiKey': 'WyJhc2hpc2hrbXIyMjEwQGdtYWlsLmNvbSIsImRlbW8iXQ.Yxb3BQ.P6RFy5SNBOHaktPtS1JmmD9Jfu8'
}
let shipthisApi = new ShipthisAPI(param)

await shipthisApi.connect().then((data) => console.log(data)).catch((err) => err.message); 

// Login via Email and Password
// await shipthisApi.loginViaPassword('ashishkmr2210@gmail.com', 'password');


// Get all Shipment information
// shipthisApi.Shipment.getAllShipments()
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
const requiredFieldsAir = {
        "port_of_loading": {},
        "port_of_discharge": {},
        "job_id": "",
        "shipment_name": "This is a test for Air Shipments",
        "shipment_class": "house",
        "customer_name": {},
        "shipment_type": "import",
        "shipment_term": {},
        "carrier_code": "994",
        "operation_executive": {}
}
const airPorts = await shipthisApi.Shipment.getAirPort()
const getCustomers = await shipthisApi.Shipment.getCustomers()
const shipTerms = await shipthisApi.Shipment.getShipmentTerms()
const getExecutive = await shipthisApi.Shipment.getOperationExecutive()
const getQuotationReference = await shipthisApi.Shipment.getQuotationReference()
const getAirPort = await shipthisApi.Shipment.getAirPort()
const getShipmentTerms = await shipthisApi.Shipment.getShipmentTerms()
const getShipperName= await shipthisApi.Shipment.getShipperName("", "62f43e1ebca73696c1ac45d4")
const getConsigneeName= await shipthisApi.Shipment.getConsigneeName("", "62f43e1ebca73696c1ac45d4")
const getPickUpNDelivery = await shipthisApi.Shipment.getPickUpNDelivery("", "62f43e1ebca73696c1ac45d4")
const getNotifyParty = await shipthisApi.Shipment.getNotifyParty("", "62f43e1ebca73696c1ac45d4")
const getGoogleLocation = await shipthisApi.Shipment.getGoogleLocation()
const getForwordingAgent = await shipthisApi.Shipment.getForwordingAgent()
const getConsolidator = await shipthisApi.Shipment.getConsolidator("", "62f43e1ebca73696c1ac45d4")
const getPlaceOfConsolidation = await shipthisApi.Shipment.getPlaceOfConsolidation()
const getOperationExecutive = await shipthisApi.Shipment.getOperationExecutive()
const getAirlineName = await shipthisApi.Shipment.getAirlineName()
const getCurrency = await shipthisApi.Shipment.getCurrency()
requiredFieldsAir.port_of_loading.port = airPorts.items[0]
requiredFieldsAir.port_of_discharge.port = airPorts.items[1]
requiredFieldsAir.customer_name = getCustomers.items[0]
requiredFieldsAir.shipment_term = getShipmentTerms.items[0]
requiredFieldsAir.operation_executive = getOperationExecutive.items[0]
requiredFieldsAir.quotation_reference = getQuotationReference.items[0]
const res = shipthisApi.Shipment.createAirShipment(requiredFieldsAir)


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
// console.log(res)



// get Quotation reference
// shipthisApi.Shipment.getQuotationReference().then((data) => console.log(data)).catch((err) => console.log(err));

// Miscellaneous functions
// shipthisApi.Shipment.getCustomers("mar").then((data) => console.log(data)).catch((err) => console.log(err.message))


// Delete the shipments
// shipthisApi.Shipment.createAirShipment("62febd45d3cb7fafac203f37").catch((err) => console.log(err.message))
