import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.scss']
})
export class TopSectionComponent implements OnInit {
  eventDate: Date = new Date(1563886059934);
  eventName: string = "2nd Colombo Bike Show 2019";
  registerButtonLink: string = "https://codepen.io/kdsuneraavinash/pen/OeqXNj";

  constructor() { }

  ngOnInit() {
  }
}
