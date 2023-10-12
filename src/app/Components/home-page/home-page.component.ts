import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  name:any
  templates:any;
  constructor() {

    this.templates = [
        {'name' : 'template1'},
        {'name' : 'template2'},
        {'name' : 'template3'}
    ]
  }
  ngOnInit(): void { 
    this.name="angular5"   
  }
}
