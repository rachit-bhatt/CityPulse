import { Component, Input } from '@angular/core';
import { AboutUs } from '../about-us/AboutUs';

@Component({
  selector: 'app-about-us-list',
  imports: [],
  templateUrl: './about-us-list.component.html',
  styleUrl: './about-us-list.component.css'
})

export class AboutUsListComponent {

  @Input() about_item : AboutUs;

  constructor() {
    this.about_item = new AboutUs();
  }
}