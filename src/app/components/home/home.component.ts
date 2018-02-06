import { Component, OnInit } from '@angular/core';
import { GetTeamsService } from '../../services/get-teams.service';
import { Teams } from '../../class/Teams';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private teamServices:GetTeamsService) { }

  teams:Teams;

  ngOnInit() {
     this.teamServices.getTeams().subscribe(data => {
      this.teams = data;
      }
    )

  }

}
