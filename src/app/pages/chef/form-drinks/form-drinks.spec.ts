import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDrinks } from './form-drinks';

describe('FormDrinks', () => {
  let component: FormDrinks;
  let fixture: ComponentFixture<FormDrinks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDrinks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDrinks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
