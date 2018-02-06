import { Component, OnInit } from '@angular/core';
import { TicketmasterService } from '../../services/ticketmaster.service';
import { TicketmasterPipe } from '../../pipes/ticketmaster.pipe';
import { TicketPricePipe } from '../../pipes/ticket-price.pipe';
 
@Component({
  selector: 'app-ticketmaster',
  templateUrl: './ticketmaster.component.html',
  styleUrls: ['./ticketmaster.component.css']
})
export class TicketmasterComponent implements OnInit {

  constructor(private _ticketmaster : TicketmasterService) {
    this._ticketmaster.getSearchByQuery().subscribe(data => {
      this.search = data;
    });
   }
  shows: any;
  search : string;
  pageSize : number;
  page: any = 1;

  cities: any[] = ['A Coruña','Albacete','Alicante','Almería','Badajoz','Badalona','Barcelona','Benidorm','Bilbao','Burgos','Cáceres','Cádiz','Cartagena','Córdoba','Elche','Gijón','Girona','Granada','Huelva','Ibiza','León','Lleida','Logroño','Madrid','Málaga','Marbella','Oviedo','Salamanca','Santander','Santiago de Compostela','Segovia','Sevilla','Tarragona','Teruel','Toledo','Valencia','Valladolid','Vigo','Zamora','Zaragoza'];

  

  ngOnInit() {
    this._ticketmaster.getShow().subscribe( data => {
      this.shows = data;
      this.pageSize = data.length;
    })
  }

  findByCity(city : string = null) {
    let _search = city ? city : this.search;
    this._ticketmaster.findByCity(_search)
        .subscribe( data => {
          this.shows = data;
          this.search = _search;
        })
  }


}
