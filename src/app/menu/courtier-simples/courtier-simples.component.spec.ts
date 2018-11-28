import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtierSimplesComponent } from './courtier-simples.component';

describe('CourtierSimplesComponent', () => {
  let component: CourtierSimplesComponent;
  let fixture: ComponentFixture<CourtierSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtierSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtierSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
