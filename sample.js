import {ShipthisAPI} from "./build/src/main.js";

let x_api_key = 'WyJhc2hpc2hrbXIyMjEwQGdtYWlsLmNvbSIsImRlbW8iXQ.YkboiA.85PdomGGEPA8i5SeDyI0leZ7sR0'

let shipthisApi = new ShipthisAPI(x_api_key, 'demo', '', 'employee')
console.log(shipthisApi.get_info())
