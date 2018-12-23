import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelreviewsComponent } from './hotelreviews/hotelreviews.component';




const hotelsRoutes : Routes = [
    { path : 'hotels', redirectTo: '/superotels'},
    { path : 'hotel/:id', redirectTo: '/superhotel/:id'},
    { path:'/superhotels', component:HotelListComponent, data:{
        animation:'hotels'}
    },
    {
        path:'/superhotel/:id', component : HotelreviewsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(hotelsRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class HotelsRoutingModule{
      
  }