import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../../services/marvel.service';
import { Marvel } from '../../class/marvel';


@Component({
  selector: 'app-marvel-search',
  templateUrl: './marvel-search.component.html',
  styleUrls: ['./marvel-search.component.css']
})
export class MarvelSearchComponent implements OnInit {

  constructor(private marvel: MarvelService) { }

  heroes : Marvel ;

  

  ngOnInit() {
    this.marvel.getCharacters()
      .subscribe(x => {
        this.heroes = x.data.results;
        console.log(this.heroes);
      })
  }


}
