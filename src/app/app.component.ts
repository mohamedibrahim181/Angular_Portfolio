import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ServicesComponent } from "./components/services/services.component";
import { NavComponent } from "./components/nav/nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ProjectsComponent, FooterComponent, ContactComponent, ExperienceComponent, ServicesComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'port';
}
