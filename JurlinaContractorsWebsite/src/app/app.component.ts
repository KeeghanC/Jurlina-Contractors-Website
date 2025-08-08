import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { servicesOffered } from '../services/services.consts';
import { ServiceComponent } from '../services/service/service.component';
import { ContactusComponent } from "../contactus/contactus.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { ProjectComponent } from "../projects/project/project.component";
import { ProjectsComponent } from "../projects/projects.component";
import { HeroComponent } from "../hero/hero.component";
import { NavComponent } from "../nav/nav.component";
import { ServicesComponent } from "../services/services.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServiceComponent, ContactusComponent, AboutUsComponent, ProjectComponent, ProjectsComponent, HeroComponent, NavComponent, ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  services = servicesOffered;
}
