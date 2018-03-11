import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarvelRoutingModule } from './marvel-routing.module';
import { MarvelSearchComponent } from '../components/marvel-search/marvel-search.component';
import { MarvelDetailComponent } from '../components/marvel-detail/marvel-detail.component';
import { MarvelService } from '../services/marvel.service';

@NgModule({
  imports: [
    CommonModule,
    MarvelRoutingModule
  ],
  declarations: [
    MarvelSearchComponent,
    MarvelDetailComponent
    
  ],
  providers: [
    MarvelService
  ]
})
export class MarvelModule { }
