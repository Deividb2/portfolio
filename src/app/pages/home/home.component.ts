// components
import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ProfileComponent } from "../../components/profile/profile.component";
import { RangeComponent } from "../../components/range/range.component";
import { ProjectsComponent } from "../../components/projects/projects.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProfileComponent, RangeComponent, ProjectsComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
