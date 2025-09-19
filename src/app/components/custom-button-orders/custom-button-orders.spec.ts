import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonOrders } from './custom-button-orders';

describe('CustomButtonOrders', () => {
  let component: CustomButtonOrders;
  let fixture: ComponentFixture<CustomButtonOrders>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomButtonOrders]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomButtonOrders);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
