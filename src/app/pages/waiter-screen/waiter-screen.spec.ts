import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaiterScreen } from './waiter-screen';

describe('WaiterScreen', () => {
  let component: WaiterScreen;
  let fixture: ComponentFixture<WaiterScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaiterScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WaiterScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
