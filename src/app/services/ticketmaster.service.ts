import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketmasterService {

  constructor(private http : HttpClient) { 
    console.log("Cargado ticket service");
   }

  apiKey :string = "qOOpSp7cLjPRPoXBpNflbs1jylXf1IS6";
  url:string = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=ES&apikey=";

  getShow() {
    return this.http.get(this.url + this.apiKey)
      .map((data :any ) => {
        return data
      });
  }

}
