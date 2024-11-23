import { Component } from '@angular/core';
import { DateTimeComponent } from './MyComponents/date-time/date-time.component';

@Component({
  selector: 'app-root',
  imports: [DateTimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'city-pulse';
}