import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchtableComponent } from './fetchtable.component';

describe('FetchtableComponent', () => {
  let component: FetchtableComponent;
  let fixture: ComponentFixture<FetchtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FetchtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
