import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-date-time',
  imports: [],
  templateUrl: './date-time.component.html',
  styleUrl: './date-time.component.css',
  providers: [DatePipe]
})

export class DateTimeComponent {
  private intervalId: any;

  public format: string = 'mediumDate';
  public today: Date = new Date();

  public get get_date(): string {
    let formatted_date = this.datePipe.transform(this.today, 'yyyy-MM-dd HH:mm:ss');
    return formatted_date ? formatted_date : this.today.toDateString();
  }

  constructor(private datePipe: DatePipe) {

  }

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.today = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}