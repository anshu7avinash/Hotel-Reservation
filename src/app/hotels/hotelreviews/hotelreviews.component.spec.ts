import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelreviewsComponent } from './hotelreviews.component';

describe('HotelreviewsComponent', () => {
  let component: HotelreviewsComponent;
  let fixture: ComponentFixture<HotelreviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelreviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
