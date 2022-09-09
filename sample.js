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
// console.log(shipthisApi.organisation);


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
const options1 = {
        "port_of_loading": {},
        "port_of_discharge": {},
        "job_id": "",
        "shipment_name": "This is a test",
        "shipment_class": "house",
        "customer_name": {},
        "shipment_type": "import",
        "shipment_term": {},
        "carrier_code": "994",
        "operation_executive": {}
}
// const airPorts = await shipthisApi.Shipment.getAirPort()
// const getCustomers = await shipthisApi.Shipment.getCustomers()
// const shipTerms = await shipthisApi.Shipment.getShipmentTerms()
// const getExecutive = await shipthisApi.Shipment.getOperationExecutive()
// const getQuotationReference = await shipthisApi.Shipment.getQuotationReference()
// const getAirPort = await shipthisApi.Shipment.getAirPort()
// const getShipmentTerms = await shipthisApi.Shipment.getShipmentTerms()
// const getShipperNConsignee = await shipthisApi.Shipment.getShipperNConsignee()
// const getPickUpNDelivery = await shipthisApi.Shipment.getPickUpNDelivery()
// const getNotifyParty = await shipthisApi.Shipment.getNotifyParty()
// const getGoogleLocation = await shipthisApi.Shipment.getGoogleLocation()
// const getForwordingAgent = await shipthisApi.Shipment.getForwordingAgent()
// const getConsolidator = await shipthisApi.Shipment.getConsolidator()
// const getPlaceOfConsolidation = await shipthisApi.Shipment.getPlaceOfConsolidation()
// const getOperationExecutive = await shipthisApi.Shipment.getOperationExecutive()
// const getAirlineName = await shipthisApi.Shipment.getAirlineName()
// const getCurrency = await shipthisApi.Shipment.getCurrency()
// options1.port_of_loading.port = airPorts.items[0]
// options1.port_of_discharge.port = airPorts.items[1]
// options1.customer_name = getCustomers.items[0]
// options1.shipment_term = shipTerms.items[0]
// options1.operation_executive = getExecutive.items[0]
// options1.quotation_reference = getQuotationReference.items[0]
//done => const res = shipthisApi.Shipment.createAirShipment(options1)

// get Quotation reference
shipthisApi.Shipment.getQuotationReference().then((data) => console.log(data)).catch((err) => console.log(err));



// Miscellaneous functions
// shipthisApi.Shipment.getCustomers("mar").then((data) => console.log(data)).catch((err) => console.log(err.message))


// Delete the shipments
// shipthisApi.Shipment.createAirShipment("62febd45d3cb7fafac203f37").catch((err) => console.log(err.message))
