import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarvelSearchComponent } from '../components/marvel-search/marvel-search.component';
import { MarvelDetailComponent } from '../components/marvel-detail/marvel-detail.component';

const routes: Routes = [
  { path: '', component: MarvelSearchComponent },
  { path: 'detail:id', component : MarvelDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarvelRoutingModule { }
