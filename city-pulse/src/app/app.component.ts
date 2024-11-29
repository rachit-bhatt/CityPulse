import { Component } from '@angular/core';
import { DateTimeComponent } from './MyComponents/date-time/date-time.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, DateTimeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'city-pulse';
}