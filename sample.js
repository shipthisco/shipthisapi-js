import {ShipthisAPI} from "./dist/shipthisapi-js/main.js";

// let x_api_key = 'WyJhc2hpc2hrbXIyMjEwQGdtYWlsLmNvbSIsImRlbW8iXQ.YkboiA.85PdomGGEPA8i5SeDyI0leZ7sR0'

let param = {
    'userType': 'customer',
    'organisationId': 'demo'
}
let shipthisApi = new ShipthisAPI(param)
// const a = await shipthisApi.connect();
const a = await shipthisApi.loginViaPassword('alex@kline.com', 'password');

// console.log(shipthisApi.organisation);

shipthisApi.Shipment.getAirShipment()
.then((data) => {
    console.log(data);
})


