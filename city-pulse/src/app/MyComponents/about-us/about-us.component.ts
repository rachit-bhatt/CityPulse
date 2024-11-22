import { Component } from '@angular/core';
import { AboutUs } from './AboutUs';
import { Role } from './Role';
import * as AboutJSON from './About.json';
import { AboutUsListComponent } from '../about-us-list/about-us-list.component';

@Component({
  selector: 'app-about-us',
  imports: [AboutUsListComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})

export class AboutUsComponent {

  about_us : AboutUs[] = [];

  constructor() {
    AboutJSON.forEach(record => {
      this.about_us.push({
        ID : record.ID,
        FirstName : record.FirstName,
        LastName : record.LastName,
        Designation : record.Designation,
        Position : Role[record.Designation],
        GitHubProfile : record.GitHubProfile,
        LinkedInProfile : record.LinkedInProfile,
        EmailAddress : record.EmailAddress
      });
    })
  }
}