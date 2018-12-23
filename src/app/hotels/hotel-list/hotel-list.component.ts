import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

import { Hotel } from '../hotel';
import { HotelserviceService } from '../hotelservice.service';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


//import the Service from where you want the hotels list.


@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {

  //parameters in the service defined 
   hotels$ : Observable<Hotel[]>;
   selectedId: number;
  // columns : String[];
  username: string = "";
  response : any ;

  //search parameters
  hotelname :string = "";
  city : string = "";
  area : string = "";

  //initialization of the parameteres in Service
  constructor(
    private service: HotelserviceService,
    private route: ActivatedRoute,
    private http : HttpClient
  ) { }


  search(){
    this.http.get('https://api.github.com/users/'+this.username)
    .subscribe( (response) => {
        this.response = response;
        console.log(this.response);
    }

    )
  }

  searchhotels(){
          if(this.hotelname!=null && this.area==null && this.city==null){
                this.http.get(''+this.hotelname)
                .subscribe( () => {
                             this.response = this.response;
                                  }
                )
        }else if(this.city!=null && this.hotelname==null && this.area==null){
                this.http.get(''+this.city)
                .subscribe( () => {
                            this.response = this.response;
                                  }
                )

        }else if(this.area!=null && this.hotelname==null && this.city==null){
                  this.http.get(''+this.area)
                  .subscribe( () => {
                              this.response = this.response;
                                    }
                  )
        }else {
                this.http.get(''+this.hotelname+this.city+this.area)
                .subscribe( () => {
                            this.response = this.response;
                                  }
                )
        }
  
  }



  //load hotels list on the initialization of the page
  ngOnInit() {
    this.hotels$ = this.route.paramMap.pipe(
      switchMap(params => {
        
        this.selectedId = +params.get('id');
        return this.service.getHotels();

      })
    )
   
  }

}
