import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssureursComponent } from './assureurs.component';

describe('AssureursComponent', () => {
  let component: AssureursComponent;
  let fixture: ComponentFixture<AssureursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssureursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssureursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
