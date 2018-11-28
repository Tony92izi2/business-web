import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TpePmeComponent } from './tpe-pme.component';

describe('TpePmeComponent', () => {
  let component: TpePmeComponent;
  let fixture: ComponentFixture<TpePmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TpePmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TpePmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
