import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFoods } from './form-foods';

describe('FormFoods', () => {
  let component: FormFoods;
  let fixture: ComponentFixture<FormFoods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormFoods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFoods);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
