import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {
  paragraphs: string[] = [
    `The '2nd Colombo Bike Show 2019' will also reveal to the country the rapid developments in the 2-wheeler and
    e-bike Industry and will also be a launching pad for many new Motorbikes as well as new technology components. The
    neat layout of the show provides ample opportunity to the consumers of vehicles to see the latest offerings in the
    market as well as to the business visitor to carry out networking in a highly enabled environment.`,
    `The '2nd Colombo Bike Show 2019' is therefore not only a networking ground but also a place to find business
  partners and strategic alliances for manufacturing, outsourcing, sub-contracting, design, and development as well
  as direct marketing.`
  ]

  constructor() { }

  ngOnInit() {
  }

}
