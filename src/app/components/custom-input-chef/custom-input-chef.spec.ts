import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomInputChef } from './custom-input-chef';

describe('CustomInputChef', () => {
  let component: CustomInputChef;
  let fixture: ComponentFixture<CustomInputChef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomInputChef]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomInputChef);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
