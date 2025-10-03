import { Component, OnInit } from '@angular/core';
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
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [NavComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  readonly title = 'Jurlina Contractors | Earthmoving & Excavation Auckland';

  constructor(private titleService: Title, private metaService: Meta) { }
  ngOnInit(): void {
    this.titleService.setTitle(this.title);

    // Add meta tags
    this.metaService.addTags([
      { name: 'description', content: 'Professional contracting services in Auckland. Quality guaranteed.' },
      { name: 'keywords', content: 'contractors, Auckland, construction, Jurlina' },
      { name: 'author', content: 'Jurlina Contractors' },
      { property: 'og:title', content: 'Jurlina Contractors' },
      { property: 'og:description', content: 'Trusted contracting services in Auckland.' },
      { property: 'og:type', content: 'website' }
    ]);

    this.metaService.addTag({ rel: 'canonical', href: 'https://jurlinacontractors.co.nz' }, true);
  }
}
