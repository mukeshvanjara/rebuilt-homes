import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesForDeveloper } from './services-for-developer';

describe('ServicesForDeveloper', () => {
  let component: ServicesForDeveloper;
  let fixture: ComponentFixture<ServicesForDeveloper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesForDeveloper]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesForDeveloper);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
