import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetTeamsService } from '../../services/get-teams.service';
import { Teams } from '../../class/Teams';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private activate : ActivatedRoute, private teamsService: GetTeamsService) { }

  team : Teams;
  ngOnInit() {
    this.getTeam();
  }

  private getTeam () {
    this.activate.params.subscribe(param => {
      this.teamsService.getTeam(param['id']).subscribe(data => {
        this.team = data
      })
    });
  }
}
