import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { servicesOffered } from '../constants/services.consts';
import { ServiceComponent } from '../service/service.component';
import { ContactusComponent } from "../contactus/contactus.component";
import { AboutUsComponent } from "../about-us/about-us.component";
import { ProjectComponent } from "../projects/project/project.component";
import { ProjectsComponent } from "../projects/projects.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ServiceComponent, ContactusComponent, AboutUsComponent, ProjectComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  websiteName = 'Jurlina Contractors - Earthmoving & Excavation Services';

  services = servicesOffered;
}
