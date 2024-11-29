import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-date-time',
  imports: [HttpClientModule],
  templateUrl: './date-time.component.html',
  styleUrl: './date-time.component.css',
  providers: [DatePipe, HttpClient]
})

export class DateTimeComponent {
  private apiKey = '620935d6d4a0f96ad60104655f342e55';
  private baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private intervalId: any;

  public format: string = 'mediumDate';
  public today: Date = new Date();

  public weatherData: any;
  public city: string = 'Toronto';

   public get get_date(): string {
    let formatted_date = this.datePipe.transform(this.today, 'yyyy-MM-dd HH:mm:ss');
    return formatted_date ? formatted_date : this.today.toDateString();
  }

  constructor(private datePipe: DatePipe,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    //#region Current Clock Interval

    this.intervalId = setInterval(() => {
      this.today = new Date();
    }, 1000);

    //#endregion

    //#region Weather Data

    this.getWeather('Toronto')
    .subscribe(data => {
      this.weatherData = data;
      console.log(this.weatherData);
    });

    //#endregion
  }

  getWeather(city: string): Observable<any> {
    const params = {
      q: city,
      appid: this.apiKey,
      units: 'imperial'
    };

    return this.http.get(this.baseUrl, { params });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}