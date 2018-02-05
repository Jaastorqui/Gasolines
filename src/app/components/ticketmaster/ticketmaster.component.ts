import { Component, OnInit } from '@angular/core';
import { TicketmasterService } from '../../services/ticketmaster.service';
 
@Component({
  selector: 'app-ticketmaster',
  templateUrl: './ticketmaster.component.html',
  styleUrls: ['./ticketmaster.component.css']
})
export class TicketmasterComponent implements OnInit {

  constructor(private _ticketmaster : TicketmasterService) { }
  shows: any;

  ngOnInit() {
    this._ticketmaster.getShow().subscribe( data => {
      this.shows = data;
    })
  }

}
