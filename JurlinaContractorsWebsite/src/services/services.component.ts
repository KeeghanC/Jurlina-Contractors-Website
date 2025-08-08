import { Component } from '@angular/core';
import { servicesOffered } from './services.consts';
import { ServiceComponent } from "./service/service.component";

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  readonly services = servicesOffered;
}
