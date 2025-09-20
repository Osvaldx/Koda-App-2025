import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOwner } from './home-owner';

describe('HomeOwner', () => {
  let component: HomeOwner;
  let fixture: ComponentFixture<HomeOwner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeOwner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOwner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
