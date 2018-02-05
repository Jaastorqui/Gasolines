import { Component, OnInit } from '@angular/core';
import { TicketmasterService } from '../../services/ticketmaster.service';
import { TicketmasterPipe } from '../../pipes/ticketmaster.pipe'
 
@Component({
  selector: 'app-ticketmaster',
  templateUrl: './ticketmaster.component.html',
  styleUrls: ['./ticketmaster.component.css']
})
export class TicketmasterComponent implements OnInit {

  constructor(private _ticketmaster : TicketmasterService) { }
  shows: any;
  search : string;

  ngOnInit() {
    this._ticketmaster.getShow().subscribe( data => {
      this.shows = data;
    })
  }

  findByCity() {
    this._ticketmaster.findByCity(this.search)
        .subscribe( data => {
          this.shows = data;
        })
  }

}
