import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

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
  postalCode : string = "&postalCode=";
  city : string = "&city=";
  shows : any;
  show : any;
  search = new Subject<any>();

  getShow(size: number = null) {
    let _size = size ? size : 20;
    let _url = this.url + this.events + "?" + this.country + "&" + this.apiKey + this.size + _size;
    return this.http.get(_url)
      .map((data :any ) => {
        this.shows = data._embedded.events;
        return this.shows
      });
  }

  findByCity(city: string) {
    let _url = this.url + this.events + "?" + this.country + "&" + this.apiKey + "" + this.city + city;
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


  searchByQuery(query: any) {
  
    let _url = "";
    if ( !isNaN(query) ) {
      _url = this.url + this.events + "?" + this.country + "&" + this.apiKey + "" + this.postalCode + query;
    } else {
      _url = this.url + this.events + "?" + this.country + "&" + this.apiKey + "" + this.city + query;
    }

    return this.http.get(_url )
      .map((data:any ) => {
        return data._embedded.events;
        
      })
      .subscribe(
        data => {
          // this.search.next(data);
          this.shows = data;
          this.search.next(query);
        },
        err => {
          console.log(err);
        },
        () => console.log('Completed')
      ); 
      ;
    /*
      .map((data :any ) => {
        return this.search.next(data);
      });
    */
  
    
  }

  getSearchByQuery(): Observable<any> {
    return this.search.asObservable();
  }



}
