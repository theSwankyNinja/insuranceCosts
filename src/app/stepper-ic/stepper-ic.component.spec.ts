import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperICComponent } from './stepper-ic.component';

describe('StepperICComponent', () => {
  let component: StepperICComponent;
  let fixture: ComponentFixture<StepperICComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperICComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperICComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
