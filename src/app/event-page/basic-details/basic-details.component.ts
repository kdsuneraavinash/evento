import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {
  venue: string = "Sri Lanka Exhibition & Convention Centre";
  organizer: string = "SLECC";
  time: string = "4.30pm to 6.00pm";

  constructor() { }

  ngOnInit() {
  }

}
