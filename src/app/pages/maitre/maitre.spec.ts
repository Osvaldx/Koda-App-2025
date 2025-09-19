import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Maitre } from './maitre';

describe('Maitre', () => {
  let component: Maitre;
  let fixture: ComponentFixture<Maitre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maitre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Maitre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
