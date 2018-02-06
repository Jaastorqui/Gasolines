import { TestBed, inject } from '@angular/core/testing';

import { GetTeamsService } from './get-teams.service';

describe('GetTeamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTeamsService]
    });
  });

  it('should be created', inject([GetTeamsService], (service: GetTeamsService) => {
    expect(service).toBeTruthy();
  }));
});
