import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Login} from './login';
import { NavbarService} from './navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotelReservation';

  submitted = false;

  constructor(private http : HttpClient, public nav : NavbarService){}

  ngOnInit(){
    let obs = this.http.get('https://api.github.com/users/koushikkothagal');
    obs.subscribe(()=>  console.log('get value'));

    this.nav.show();
    this.nav.doSomethingElseUseful();
  }



  
}
