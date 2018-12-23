import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  isCollapsed : boolean = true;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }

  public save(){
    
  }

}
