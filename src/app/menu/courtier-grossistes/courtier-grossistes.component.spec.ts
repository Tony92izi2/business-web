import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtierGrossistesComponent } from './courtier-grossistes.component';

describe('CourtierGrossistesComponent', () => {
  let component: CourtierGrossistesComponent;
  let fixture: ComponentFixture<CourtierGrossistesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtierGrossistesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtierGrossistesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
