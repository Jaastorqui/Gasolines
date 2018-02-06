import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TicketmasterService {

  constructor(private http : HttpClient) { 
    console.log("Cargado ticket service");
   }

  apiKey :string = "apikey=qOOpSp7cLjPRPoXBpNflbs1jylXf1IS6";
  country : string = "countryCode=ES";
  events : string = "events.json";
  url:string = "https://app.ticketmaster.com/discovery/v2/";
  size : string = "&size=";
  shows : any;
  show : any;

  getShow() {
    let _url = this.url + this.events + "?" + this.country + "&" + this.apiKey + this.size + "200";
    return this.http.get(_url)
      .map((data :any ) => {
        this.shows = data._embedded.events;
        return this.shows
      });
  }

  findByCity(city: string) {
    let _url = this.url + this.events + "?" + this.country + "&" + this.apiKey + "&city=" + city;
    return this.http.get(_url )
      .map((data :any ) => {
        if ( data._embedded )
          this.shows = data._embedded.events;
        else 
          this.shows = [];
        return this.shows
      });
  }

  findById (id: string) {
    let _url = this.url + "events/" + id + "?" + this.apiKey ;
    return this.http.get(_url)
      .map((data :any ) => {
        this.show = data;
        return this.show
      });
  }

}
