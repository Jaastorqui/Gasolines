import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ticketmaster'
})
export class TicketmasterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    let url : string;
    if ( value.length > 0 ){
      url = value[1] ? value[1].url : value[0].url;
    } else {
      url = "http://via.placeholder.com/100x56";
    }
    
    return url;
  }

}
