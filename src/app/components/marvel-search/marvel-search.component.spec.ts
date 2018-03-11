import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelSearchComponent } from './marvel-search.component';

describe('MarvelSearchComponent', () => {
  let component: MarvelSearchComponent;
  let fixture: ComponentFixture<MarvelSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
