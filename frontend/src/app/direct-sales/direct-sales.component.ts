import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-direct-sales',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './direct-sales.component.html',
  styleUrl: './direct-sales.component.css'
})
export class DirectSalesComponent {
  contact = {
    naam: '',
    voornaam: '',
    email: '',
    telefoon: '',
    bericht: ''
  };

  submitForm() {
    const serviceID = 'service_ha0gvhq';
    const templateID = 'template_nvgylvd';
    const publicKey = 'pbKb79FyG0bQ6ckwV';

    const templateParams = {
      naam: this.contact.naam,
      voornaam: this.contact.voornaam,
      email: this.contact.email,
      telefoon: this.contact.telefoon,
      bericht: this.contact.bericht
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(response => {
        console.log('E-mail verzonden!', response);
        alert('Bedankt voor je bericht! We nemen snel contact met je op.');
        this.contact = { naam: '', voornaam: '', email: '', telefoon: '', bericht: '' }; // Formulier resetten
      })
      .catch(error => {
        console.error('Fout bij verzenden:', error);
        alert('Er is iets misgegaan. Probeer het later opnieuw.');
      });
  }

  scrollTo(section: string, event: Event) {
    event.preventDefault(); // Voorkomt dat Angular de navigatie overneemt
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }

}
