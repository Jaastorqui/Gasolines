import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap  } from '@angular/router';
import { TicketmasterService } from '../../services/ticketmaster.service';


@Component({
  selector: 'app-ticketmaster-info',
  templateUrl: './ticketmaster-info.component.html',
  styleUrls: ['./ticketmaster-info.component.css']
})
export class TicketmasterInfoComponent implements OnInit {

  constructor(private activate: ActivatedRoute,
    private _ticketmaster : TicketmasterService,
    private route: Router) { }
  id: string;
  show: any;



  ngOnInit() {
    this.activate.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number

      this.findShow(this.id);
      // In a real app: dispatch action to load the details here.
   });

  }

  findShow(id : string) {
    this._ticketmaster.findById(id)
        .subscribe( data => {
          this.show = data;
      });
  }
  back() {
    this.route.navigate(['/ticketmaster']);
  }

}
