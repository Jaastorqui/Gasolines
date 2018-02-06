import { Component, OnInit } from '@angular/core';
import { TicketmasterService } from '../.././services/ticketmaster.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _ticketmaster: TicketmasterService) { }
  searchModel : string;

  ngOnInit() {
  }

  search() {
    let _codePostal = Number(this.searchModel);
    if ( !isNaN(_codePostal) ) {
      let _search : number = _codePostal;
      this._ticketmaster.searchByQuery(_search);
    } else {
      this._ticketmaster.searchByQuery(this.searchModel);
    }
  }

}
