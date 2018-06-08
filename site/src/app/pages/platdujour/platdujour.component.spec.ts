import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatdujourComponent } from './platdujour.component';

describe('PlatdujourComponent', () => {
  let component: PlatdujourComponent;
  let fixture: ComponentFixture<PlatdujourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatdujourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatdujourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
