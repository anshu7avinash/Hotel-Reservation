import { Component, OnInit } from '@angular/core';
import { Login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  user = new Login('admin','admin');

  constructor() { }

  ngOnInit() {
  }

  //onSubmit and cancel method are for the login page
  onSubmit(){
    this.submitted = true;
    
  }

  cancel(){
    this.submitted = false;
    this.user = new Login('','');
  }
  //end

}
