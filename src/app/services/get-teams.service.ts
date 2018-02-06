import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Teams } from '../class/Teams';


@Injectable()
export class GetTeamsService {

  constructor(private http:HttpClient) { }


  getTeams(){
    // return this.http.get('assets/teams.json').subscribe(res =>  res );
    return this.http.get<Teams>('assets/teams.json')
      .map((response: Teams) => response);
  }
  getTeam(id){
    // return this.http.get('assets/teams.json').subscribe(res =>  res );
    return this.http.get<Teams>('assets/teams.json')
      .map((response: Teams) => {
        for (let i in response) {
          if ( response[i].id == id ) 
            return response[i];
          
        }
        
       });
  }

}

