import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesForSocieties } from './services-for-societies';

describe('ServicesForSocieties', () => {
  let component: ServicesForSocieties;
  let fixture: ComponentFixture<ServicesForSocieties>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesForSocieties]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesForSocieties);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
