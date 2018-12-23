import { TestBed } from '@angular/core/testing';

import { HotelserviceService } from './hotelservice.service';

describe('HotelserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HotelserviceService = TestBed.get(HotelserviceService);
    expect(service).toBeTruthy();
  });
});
