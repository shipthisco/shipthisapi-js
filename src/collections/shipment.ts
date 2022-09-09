import { ShipthisAPI } from "../main";
import { RequestData , requiredData, referencePortPayload, referenceCustomerPayload, requiredShipmentType, requiredShpmentClass} from "./request-body"
import { managePayload } from "../utils/commonUtils";


// const updateObject = {
//         _id: {
//           $oid: "62febd45d3cb7fafac203f37"
//         },
//         quotation_reference: {
//           _id: {
//             $oid: "63034abc1a638eaee7306e73"
//           },
//           quotation_number: "Q-004443",
//           _cls_: "quotation",
//           __display: "Q-004443"
//         },
//         shipment_class: "direct",
//         customer_name: {
//           _id: {
//             $oid: "62fcffb91adcce1393d3cfec"
//           },
//           company: {
//             name: "Markup"
//           },
//           primary_contact_person: {
//             name: "Justin",
//             email: "justin@markup.com",
//             enable_portal_access: true,
//             first_name: "Justin",
//             last_name: "Markup"
//           },
//           _cls_: "customer",
//           __warn: false,
//           __display: "Markup"
//         },
//         shipment_type: "import",
//         shipment_term: {
//           _id: {
//             $oid: "602be55948c04c39742043e3"
//           },
//           name: "DOOR TO PORT",
//           code: "DTP",
//           _cls_: "shipment_term",
//           _operation: {
//             edit: true,
//             delete: true
//           },
//           __display: "DTP - DOOR TO PORT"
//         },
//         shipment_name: "This is a test shipment",
//         is_consolidated_shipment: false,
//         master_shipment_cost_allocation: "per_kg_chargeable_wt",
//         enable_automated_tracking: false,
//         custom: {
//           is_exhibition: false
//         },
//         order_ref_no: [],
//         mawb_no: "123456789",
//         airline: {
//           _id: {
//             $oid: "5738c34a8752f565965ec2d5"
//           },
//           _cls_: "airline",
//           prefix_code: "526",
//           name: "Southwest Airlines",
//           _operation: {
//             edit: true,
//             delete: true
//           },
//           __display: "Southwest Airlines - 526"
//         },
//         hawb_no: "123456789",
//         booking_no: "123456789",
//         flight_no: "039849",
//         shipper_declared_value: {
//           amount: 0
//         },
//         country_of_origin: {},
//         insurance: {
//           need_insurance: false
//         },
//         cartage_cost_amount: 5000000,
//         customs_clearance_by: {
//           _id: {
//             $oid: "62bac8d1aeacac5c45584d30"
//           },
//           company: {
//             name: "XYZ company",
//             vendor_type: [
//               "customs_agent"
//             ],
//             nick_name: "XYZ",
//             vendor_id: "SAPV123",
//             website: "xyzagents.com",
//             customer_segment: [
//               {
//                 _id: {
//                   $oid: "61f7eeebaeb6a0c5e01b1d9d"
//                 },
//                 name: "Pharma & Life Sciences",
//                 _cls_: "customer_segment",
//                 __display: "Pharma & Life Sciences"
//               }
//             ]
//           },
//           primary_contact_person: {
//             salutation: "mr",
//             name: "Mr. Sartaj Beary",
//             email: "",
//             enable_portal_access: true,
//             first_name: "Sartaj",
//             last_name: "Beary",
//             additional_emails: []
//           },
//           address: {
//             city: {}
//           },
//           _cls_: "vendor",
//           __display: "XYZ company"
//         },
//         place_of_receipt: {
//           location: {},
//           arrival_date: {
//             $date: 1661212800000
//           }
//         },
//         port_of_loading: {
//           port: {
//             _id: {
//               $oid: "629f1ed5585b24841d242020"
//             },
//             name: "XYZ",
//             code: "123",
//             location: {
//               description: "New York, NY, USA",
//               bold: "New York",
//               lat: 40.7127753,
//               lng: -74.0059728,
//               query_type: "place_id",
//               type: "city",
//               province: "New York",
//               province_code: "NY",
//               city: "New York",
//               country: "United States",
//               country_code: "US"
//             },
//             _cls_: "airport",
//             __display: "123 - XYZ"
//           },
//           departure_date: {
//             $date: 1661385600000
//           },
//           original_departure_date: {
//             $date: 1661472000000
//           },
//           transit_time: 2
//         },
//         port_of_discharge: {
//           port: {
//             _id: {
//               $oid: "629f1ed5585b24841d242020"
//             },
//             name: "XYZ",
//             code: "123",
//             location: {
//               description: "New York, NY, USA",
//               bold: "New York",
//               lat: 40.7127753,
//               lng: -74.0059728,
//               query_type: "place_id",
//               type: "city",
//               province: "New York",
//               province_code: "NY",
//               city: "New York",
//               country: "United States",
//               country_code: "US"
//             },
//             _cls_: "airport",
//             __display: "123 - XYZ"
//           },
//           arrival_date: {
//             $date: 1661558400000
//           },
//           original_arrival_date: {
//             $date: 1661558400000
//           }
//         },
//         place_of_delivery: {
//           location: {},
//           delivery_date: {
//             $date: 1661644800000
//           }
//         },
//         operation_executive: {
//           _id: {
//             $oid: "61236f0f34b129c092184e8a"
//           },
//           name: "Yash",
//           __display: "Yash",
//           email: "yash@shipthis.co",
//           _cls_: "employee"
//         },
//         forwarding_agent_show_on_master: true,
//         destination_agent_show_on_master: true,
//         carrier_code: "12345",
//         pod_documents: [],
//         skus: [],
//         under_watchlist: false,
//         notify_events_via_email: false,
//         tags: [],
//         mawb_rate_class_code: "B",
//         pick_charge_from_invoice: false,
//         hawb_override_dimensions: false,
//         hawb_rate_class_code: "B",
//         hawb_rate_or_charge: 0,
//         hawb_rate_total: 0,
//         hawb_has_other_charges: false,
//         documents: [],
//         customer_documents: [],
//         customer_uploaded_documents: [],
//         job_status: "open",
//         shipment_status: "customs_cleared",
//         __events: {
//           opened__date: {
//             $date: 1660780800000
//           },
//           opened__comments: "",
//           confirmed__date: {
//             $date: 1661269371370
//           },
//           confirmed__included_in_timeline: true,
//           in_transit__date: {
//             $date: 1661269724549
//           },
//           in_transit__included_in_timeline: true,
//           customs_cleared__date: {
//             $date: 1661269886555
//           },
//           customs_cleared__comments: "Hello",
//           customs_cleared__included_in_timeline: true
//         },
//         created_at: {
//           $date: 1660861765563
//         },
//         modified_at: {
//           $date: 1662444081041
//         },
//         _cls_: "air_shipment",
//         _created_by: "61236f0f34b129c092184e8c",
//         _last_modified_by: "5ea15383dc21e40008482068",
//         _created_by_name: "Yash",
//         _last_modified_by_name: "Ashish",
//         _last_modified_by_email: "ashishkmr2210@gmail.com",
//         _last_update: "",
//         _last_remark: "",
//         __workflow: {},
//         __cache: {
//           house_shipments: {
//             shipment_stats: []
//           },
//           account_stats: {
//             first_invoiced_date: null,
//             first_approved_invoiced_date: null,
//             invoice_sub_total: 0,
//             approved_invoice_sub_total: 0,
//             invoice_total: 0,
//             approved_invoice_total: 0,
//             costing_sub_total: 0,
//             approved_costing_sub_total: 0,
//             costing_total: 0,
//             approved_costing_total: 0,
//             expense_sub_total: 0,
//             approved_expense_sub_total: 0,
//             expense_total: 0,
//             approved_expense_total: 0,
//             credit_note_sub_total: 0,
//             approved_credit_note_sub_total: 0,
//             credit_note_total: 0,
//             approved_credit_note_total: 0,
//             debit_note_sub_total: 0,
//             approved_debit_note_sub_total: 0,
//             debit_note_total: 0,
//             approved_debit_note_total: 0,
//             revenue: 0,
//             cost: 0,
//             revenue_approved: 0,
//             cost_approved: 0,
//             profit_loss: 0,
//             profit_loss_approved: 0,
//             revenue_tax_incl: 0,
//             cost_tax_incl: 0,
//             revenue_approved_tax_incl: 0,
//             cost_approved_tax_incl: 0,
//             profit_loss_tax_incl: 0,
//             profit_loss_approved_tax_incl: 0,
//             cleaned: true,
//             profit_margin_tax_incl: 100,
//             profit_margin: 100
//           }
//         },
//         __enabled_reports: {},
//         __status: {},
//         __scp: {},
//         __location_id: [
//           "new_york"
//         ],
//         __region_id: [
//           "usa"
//         ],
//         __import_reference: null,
//         __deleted: false,
//         __subscribers: {
//           customers: [
//             "justin@markup.com"
//           ],
//           vendors: [],
//           employee: [
//             "yash@shipthis.co"
//           ]
//         }
//       }
export class Shipment {
  public obj: ShipthisAPI;


  constructor(obj: ShipthisAPI) {
    this.obj = obj;
  }

  // Read
  public getAllShipments() {
    return this.obj.getListGenericCollection(this.obj, 'shipment_v2');
  }
  public getAirShipments() {
    return this.obj.getListGenericCollection(this.obj, 'air_shipment')
  }
  public getSeaShipments() {
    return this.obj.getListGenericCollection(this.obj, 'sea_shipment')
  }
  public getLandShipments() {
    return this.obj.getListGenericCollection(this.obj, 'land_shipment')
  }

  // Get single shipment with jobid
  public getAirShipment(ObjectId: string) {
    return this.obj.getOneGenericCollectionItem(this.obj, 'air_shipment', ObjectId);
  }
  public getSeaShipment(ObjectId: string) {
    return this.obj.getOneGenericCollectionItem(this.obj, 'sea_shipment', ObjectId);
  }
  public getLandShipment(ObjectId: string) {
    return this.obj.getOneGenericCollectionItem(this.obj, 'land_shipment', ObjectId);
  }

  // Update
  public updateAirShipment(ObjectId: string, updatedData: any) {
    const allKeys = Object.keys(updatedData)
    for (const item in requiredData) {
      if (!allKeys.includes(item)) {
        throw new Error("fill all the required fields") 
      }
    }
    const Data = {...requiredData, ...updatedData}
    Data.reqbody.__events.opened__date.$date = new Date().getTime()
    return this.obj.updateGenericCollectionItem(this.obj, 'air_shipment', ObjectId, Data);
  }
  public updateSeaShipment(ObjectId: string, updatedData: any) {
    return this.obj.updateGenericCollectionItem(this.obj, 'sea_shipment', ObjectId, updatedData);
  }
  public updateLandShipment(ObjectId: string, updatedData: any) {
    return this.obj.updateGenericCollectionItem(this.obj, 'land_shipment', ObjectId, updatedData);
  }


  // Create
  public createAirShipment(data : any) {
    const allKeys = Object.keys(data)
    console.log(allKeys)
    for (let i = 0; i < requiredData.length; i++) {
      console.log(requiredData[i])
      if (!allKeys.includes(requiredData[i])) {
        console.log(requiredData[i])
        throw new Error("fill all the required fields")
      }
    }
    if (!requiredShipmentType.includes(data.shipment_term) || !requiredShpmentClass.includes(data.shipment_class)) {
      throw new Error("fill all the fields with correct values")
    }
    const Data = {...RequestData, ...data}
    return this.obj.createGenericCollectionItem(this.obj, 'air_shipment', Data)
  }
  public createSeaShipment(data: any) {
    const allKeys = Object.keys(data)
    console.log(allKeys)
    for (let i = 0; i < requiredData.length; i++) {
      console.log(requiredData[i])
      if (!allKeys.includes(requiredData[i])) {
        console.log(requiredData[i])
        throw new Error("fill all the required fields")
      }
    }
    if (!requiredShipmentType.includes(data.shipment_term) || !requiredShpmentClass.includes(data.shipment_class)) {
      throw new Error("fill all the fields with correct values")
    }
    const Data = {...RequestData, ...data}
    return this.obj.createGenericCollectionItem(this.obj, 'sea_shipment', Data)
  }
  public createLandShipment(data : any) {
    const allKeys = Object.keys(data)
    console.log(allKeys)
    for (let i = 0; i < requiredData.length; i++) {
      console.log(requiredData[i])
      if (!allKeys.includes(requiredData[i])) {
        console.log(requiredData[i])
        throw new Error("fill all the required fields")
      }
    }
    if (!requiredShipmentType.includes(data.shipment_term) || !requiredShpmentClass.includes(data.shipment_class)) {
      throw new Error("fill all the fields with correct values")
    }
    const Data = {...RequestData, ...data}
    return this.obj.createGenericCollectionItem(this.obj, 'land_shipment', Data)
  }

  // Delete
  public deleteAirShipment(ObjectId: string) {
    return this.obj.deleteGenericCollectionItem(this.obj, 'air_shipment', ObjectId);
  }
  public deleteSeaShipment(ObjectId: string) {
    return this.obj.deleteGenericCollectionItem(this.obj, 'sea_shipment', ObjectId);
  }
  public deleteLandShipment(ObjectId: string) {
    return this.obj.deleteGenericCollectionItem(this.obj, 'land_shipment', ObjectId);
  }


  // Miscellaneous Fuctions
  // based on the user input filter the port
  // for the filter
  public getAirPort(data = ""){ 
    const updatedData = {...referencePortPayload}
    updatedData.filter_txt = data
    return this.obj.getGenericAutoComplete(this.obj, 'airport', updatedData);
  }

  // get customer list
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/autocomplete-reference/customer?location=new_york
  public getCustomers(data = ""){
    const updatedData = {...referenceCustomerPayload}
    updatedData.filter_txt = data
    return this.obj.getGenericAutoComplete(this.obj, 'customer', updatedData);
  }

  // get shipment terms
  public getShipmentTerms(){
    return this.obj.getListGenericCollection(this.obj, 'shipment_term', {only: "name,code,order", general_filter:{}});
  }

  // get quotation_reference
  public getQuotationReference(data = null){
    const updatedData = managePayload(data, ["quotation_number"], ["quotation_number"])
    return this.obj.getGenericAutoComplete(this.obj, 'quotation', updatedData);
  }

  // get master shipment

  public getMasterShipment(data = null){  
    const fields = ["company.name", "full_address", "address", "tin_no"]
    const display_fields = ["company.name"]
    const updatedData = managePayload(data, fields, display_fields)
    return this.obj.getGenericAutoComplete(this.obj, 'sea_shipment', updatedData);
  }

  // get Shipper Name and Consignee
  public getShipperNConsignee(data = ""){
    const fields = [
      "job_id",
      "shipper_name",
      "consignee_name"
  ]
    const display_fields = [
      "job_id"
  ]
    const updatedData = managePayload(data, fields, display_fields)
    return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
  }
  // get pickup name
  public getPickUpNDelivery(data = ""){
    const fields = ["full_address", "address", "company", "tin_no"]
    const display_fields = ["company.name"]
    const updatedData = managePayload(data, fields, display_fields)
    return this.obj.getGenericAutoComplete(this.obj, 'customer_party', updatedData);
  }

  // get notify party and also for also notify party
  public getNotifyParty(data = ""){
    return this.getShipperNConsignee(data)
  }

  // get location with google
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/thirdparty/search-place-autocomplete?query-level=undefined&query=d
  public getGoogleLocation(data = ""){
    return this.obj.getLocation(this.obj, "search-place-autocomplete", {query_level:undefined,query:data})
  }

  // get forwording Agent Name
  public getForwordingAgent(data = ""){
    const fields = [
      "full_address",
      "address",
      "company",
      "primary_contact_person",
      "tin_no"
  ]
    const display_fields = ["company.name"]
    const updatedData = managePayload(data, fields, display_fields)
    return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
  }

  // get consolidator
  public getConsolidator(data = ""){
    const fields = ["company.name", "full_address", "address", "tin_no"]  
    const display_fields = ["company.name"]
    const general_filters = "{\n    \"company.vendor_type\":\"consolidator\"\n}"
    const updatedData = managePayload(data, fields, display_fields, general_filters)
    return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
  }

  // get place of consolidation
  public getPlaceOfConsolidation(data = ""){
    const fields = ["company.name", "full_address", "address", "tin_no"]  
    const display_fields = ["company.name"]
    const general_filters = "{\n    \"company.vendor_type\":\"place_of_consolidation\"\n}"
    const updatedData = managePayload(data, fields, display_fields, general_filters)
    return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
    }

  // get the operation_executive and sales executive
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/employee?&only=_id,name&general_filter={}
  public getOperationExecutive(){
    return this.obj.getListGenericCollection(this.obj, 'employee', {only: "_id,name", general_filter:{}});
  }

  // get airline name 
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/airline?&only=name,cbsa_code,prefix_code&general_filter={}
  public getAirlineName(){
    return this.obj.getListGenericCollection(this.obj, 'airline', {only: "name,cbsa_code,prefix_code", general_filter:{}});
  }

  // get currency
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/incollection/currency?&only=_id,name&general_filter={}
  public getCurrency(){
    return this.obj.getListGenericCollection(this.obj, 'currency', {only: "name", general_filter:{}});
  }

  // get cartage By and custom clearance by
  // url : https://asia-south1.gcp.api.shipthis.co/api/v3/autocomplete-reference/vendor?location=new_york
  public CartageByAndCustomClearance(data=""){
    const fields = [
      "company",
      "address",
      "primary_contact_person"
  ]
    const display_fields = ["company.name"]
    const general_filters = "{\n    \"company.vendor_type\":\"place_of_consolidation\"\n}"
    const updatedData = managePayload(data, fields, display_fields, general_filters)
    return this.obj.getGenericAutoComplete(this.obj, 'vendor', updatedData);
  }

  // get Product type for sea
  public getProductType(){
    return this.obj.getListGenericCollection(this.obj, 'product_type', {only: "_id,name", general_filter:{}});
  }
}
