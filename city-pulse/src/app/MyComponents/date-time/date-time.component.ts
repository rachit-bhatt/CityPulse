import { Component } from '@angular/core';

@Component({
  selector: 'app-date-time',
  imports: [],
  templateUrl: './date-time.component.html',
  styleUrl: './date-time.component.css'
})

export class DateTimeComponent {
  public format : string = 'mediumDate';
  public today : Date = new Date();
  private intervalId : any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.today = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}