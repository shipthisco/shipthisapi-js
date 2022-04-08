import { createGenericCollectionItem, deleteGenericCollectionItem, getListGenericCollection, getOneGenericCollectionItem, updateGenericCollectionItem } from './collections/generic';
import { ApiOptions } from './interfaces/api.interface';
import { internalRequest } from './utils/request';
import {Shipment} from './collections/shipment';
import { Organisation } from './interfaces/info.interface';
import { Invoice } from './collections/invoice';
export class ShipthisAPI {
  serverUrl = 'https://api.shipthis.co'

  base_api_endpoint = 'https://api.shipthis.co/api/v3/';
  xApiKey: string;
  organisationId:string;
  organisation: Organisation;
  userType: string;
  selectedRegion: string;
  selectedLocation: string;


  public internalRequest = internalRequest;
  public getListGenericCollection = getListGenericCollection;
  public getOneGenericCollectionItem = getOneGenericCollectionItem;
  public createGenericCollectionItem = createGenericCollectionItem;
  public updateGenericCollectionItem = updateGenericCollectionItem;
  public deleteGenericCollectionItem = deleteGenericCollectionItem;

  /**
   * Collection Definition
   */
   public Shipment: Shipment;
   public Invoice: Invoice;


  /**
   *  Initializer
   * @param init 
   */
   constructor(init: ApiOptions) {
    this.xApiKey = init.xApiKey;
    this.organisationId = init.organisationId;
    this.userType = init.userType;
    this.selectedRegion = init.regionId || '';
    this.selectedLocation = init.locationId || '';
    this.getInfo()
    .then((infoResponse) => {
      this.organisation = infoResponse.organisation;
      this.serverUrl = infoResponse.api_endpoint;
    });
  }

  public async connect(locationId=null) {
    return new Promise((resolve) => {
      this.getInfo()
      .then((resp:any) => {
        this.organisation = resp.organisation;
        this.serverUrl = resp.api_endpoint;
        if(!locationId) {
          this.selectedRegion = resp?.organisation?.regions[0]?.region_id;
          this.selectedLocation = resp?.organisation?.regions[0]?.locations[0]?.location_id;
        } else {
          let foundLocation = false;
          for(let i=0; i<this.organisation.regions.length; i++) {
            for(let j=0; j<this.organisation.regions[i].locations.length; j++) {
              if(this.organisation.regions[i][j].location_id === locationId) {
                this.selectedRegion = this.organisation.regions[i].region_id;
                this.selectedLocation = this.organisation.regions[i].locations[j].location_id;
                foundLocation = true;
                break;
              }
              if(foundLocation) {
                break;
              }
            }
          }
          if(!foundLocation) {
            new Error('Location id does not exist , check available location ids');
          }
        }
        this.setObjectReferences();
        resolve({'selectedRegion': this.selectedRegion, 'selectedLocation': this.selectedLocation})
      });

    })
  }

   public getSelectedRegion() {
     return this.selectedRegion;
   }
   public setRegionAndLocation(regionId: string, locationId:string) {
     this.selectedRegion = regionId;
     this.selectedLocation = locationId;
   }
 

  setObjectReferences() {
    this.Shipment = new Shipment(this);
  }

  /**
   * Gets the initial configuration information
   * @returns {Promise<AxiosResponse<ShipthisApiResponse<InfoData>>>}
   */
  public getInfo() {
    return this.internalRequest(this, 'GET', '/auth/info');
  }
}
