import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphoneListingComponent } from './smartphone-listing.component';

describe('SmartphoneListingComponent', () => {
  let component: SmartphoneListingComponent;
  let fixture: ComponentFixture<SmartphoneListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmartphoneListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphoneListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
