import { Component } from '@angular/core';
import { AboutUs } from './AboutUs';
import { Role } from './Role';
import * as AboutJSON from './About.json';

@Component({
  selector: 'app-about-us',
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  about_us : AboutUs[];
  demo : AboutUs[] = [];

  constructor() {
    this.about_us = [
      new AboutUs('', '', '', Role.UI_DEVELOPER, '', '', '')
    ];

    for (let index = 0; index < AboutJSON.length; index++) {
      this.demo.push(AboutJSON[index]);
    }
  }
}