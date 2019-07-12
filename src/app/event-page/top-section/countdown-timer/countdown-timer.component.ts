import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit {
  seconds: number = 0;
  minutes: number = 0;
  hours: number = 0;
  days: number = 0;

  // Pass this to this component
  @Input("deadline") deadlineDate: Date;

  constructor() { }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    setInterval(() => {
      this.calculateTime();
    }, 1000)
  }

  calculateTime() {
    let nowSeconds: number = (new Date()).getTime();
    let futureSeconds: number = this.deadlineDate.getTime();

    var delta = Math.abs(futureSeconds - nowSeconds) / 1000;
    this.days = Math.floor(delta / 86400);
    delta -= this.days * 86400;

    this.hours = Math.floor(delta / 3600) % 24;
    delta -= this.hours * 3600;

    this.minutes = Math.floor(delta / 60) % 60;
    delta -= this.minutes * 60;

    this.seconds = Math.floor(delta % 60);
  }

}
