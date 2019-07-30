import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fetchtable2Component } from './fetchtable2.component';

describe('Fetchtable2Component', () => {
  let component: Fetchtable2Component;
  let fixture: ComponentFixture<Fetchtable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fetchtable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fetchtable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
