import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vins2Component } from './vins2.component';

describe('Vins2Component', () => {
  let component: Vins2Component;
  let fixture: ComponentFixture<Vins2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vins2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vins2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
