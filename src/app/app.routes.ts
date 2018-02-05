import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { InfoComponent } from './components/info/info.component';
import { TicketmasterComponent } from './components/ticketmaster/ticketmaster.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'info/:id', component: InfoComponent },
    { path: 'ticketmaster', component: TicketmasterComponent },
    
    { path: '**', pathMatch: 'full', redirectTo: '' }

];

export const router = RouterModule.forRoot(routes);
