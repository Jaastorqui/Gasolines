import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetTeamsService } from './services/get-teams.service';
import { AgmCoreModule } from '@agm/core';



import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';


import { router } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar.component';
import { InfoComponent } from './components/info/info.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    router,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB82pFg_av8RPy1p0trCouSbJxv5TA2sWQ'
    })
  ],
  providers: [GetTeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
