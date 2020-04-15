import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  myimage:string ='assets/images/eu.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
