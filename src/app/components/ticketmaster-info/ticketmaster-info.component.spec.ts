import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketmasterInfoComponent } from './ticketmaster-info.component';

describe('TicketmasterInfoComponent', () => {
  let component: TicketmasterInfoComponent;
  let fixture: ComponentFixture<TicketmasterInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketmasterInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketmasterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
