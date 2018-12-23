import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hotel } from './hotel';
import { HOTELS } from './mock-hotels';



@Injectable({
  providedIn: 'root'
})
export class HotelserviceService {

  private hotels$: BehaviorSubject<Hotel[]> = new BehaviorSubject<Hotel[]>(HOTELS);

  getHotels() { return this.hotels$; }

  getHotel(id : number){
    return this.getHotels().pipe(
      map(hotels => hotels.find(hotel => hotel.hotelid === +id))
    )
  }
  
  constructor() { }
}
