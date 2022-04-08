import {ShipthisAPI} from "./dist/shipthisapi-js/main.js";

let x_api_key = 'WyJhc2hpc2hrbXIyMjEwQGdtYWlsLmNvbSIsImRlbW8iXQ.YkboiA.85PdomGGEPA8i5SeDyI0leZ7sR0'

let param = {
    'xApiKey': x_api_key,
    'userType': 'employee',
    'organisationId': 'demo'
}
let shipthisApi = new ShipthisAPI(param)
await shipthisApi.connect();
shipthisApi.Shipment.getAirShipment()
.then((data) => {
    console.log(data);
})


