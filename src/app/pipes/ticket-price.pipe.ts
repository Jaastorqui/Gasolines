import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ticketPrice'
})
export class TicketPricePipe implements PipeTransform {

  constructor() {  }

  transform(value: any, args?: any): any {

    let min : number;

    if ( value == null )
    {
      min = 0;
    } else if ( value.length > 0 ) {
      min = value[0].min
    }

    return min;
  }

}
