import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeChef } from './home-chef';

describe('HomeChef', () => {
  let component: HomeChef;
  let fixture: ComponentFixture<HomeChef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeChef]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeChef);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
