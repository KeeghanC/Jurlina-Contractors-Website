import { Component } from '@angular/core';
import { contactDetails } from '../constants/contact-details.consts';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent {
  contactDetails = contactDetails;

  onSubmit() { }
}
