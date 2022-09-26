import {ShipthisAPI} from "./dist/shipthisapi-js/main.js";

// let x_api_key = 'WyJhc2hpc2hrbXIyMjEwQGdtYWlsLmNvbSIsImRlbW8iXQ.YkboiA.85PdomGGEPA8i5SeDyI0leZ7sR0'

let param = {
  'userType': 'customer',
  'organisationId': 'shipbeaconexpress'
}
let shipthisApi = new ShipthisAPI(param)
// const a = await shipthisApi.connect();
const a = await shipthisApi.loginViaPassword('ahmed@shipthis.co', 'password');

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


shipthisApi.getReportView(shipthisApi, 'invoice_manage', '1632700800000', '1664236799000', 'nasau', 'json', true, {
  "user_filter": {
    "entry_id": {
      "type": "reference",
      "value": "6331d88834cc212bfb7c75b4"
    }
  }
})
  .then((data) => {
    console.log(data);
  })
