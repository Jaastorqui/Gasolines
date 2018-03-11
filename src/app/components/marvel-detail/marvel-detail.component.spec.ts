import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelDetailComponent } from './marvel-detail.component';

describe('MarvelDetailComponent', () => {
  let component: MarvelDetailComponent;
  let fixture: ComponentFixture<MarvelDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
