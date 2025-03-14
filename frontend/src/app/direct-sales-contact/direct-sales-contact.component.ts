import { Component } from '@angular/core';
import {DirectSalesNavigationComponent} from "../direct-sales-navigation/direct-sales-navigation.component";
import {FormsModule} from '@angular/forms';
import emailjs from '@emailjs/browser';
import {DirectSalesFooterComponent} from '../direct-sales-footer/direct-sales-footer.component';

@Component({
  selector: 'app-direct-sales-contact',
  imports: [
    DirectSalesNavigationComponent,
    FormsModule,
    DirectSalesFooterComponent
  ],
  templateUrl: './direct-sales-contact.component.html',
  styleUrl: './direct-sales-contact.component.css'
})
export class DirectSalesContactComponent {
  contact = {
    naam: '',
    voornaam: '',
    email: '',
    telefoon: '',
    bericht: ''
  };
  loading = false;
  errorMessage = '';

  submitForm() {
    if (!this.validateForm()) {
      this.errorMessage = 'Vul alle verplichte velden correct in.';
      return;
    }

    this.loading = true;
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
        this.contact = {naam: '', voornaam: '', email: '', telefoon: '', bericht: ''};
      })
      .catch(error => {
        console.error('Fout bij verzenden:', error);
        this.errorMessage = 'Er is iets misgegaan bij het verzenden. Probeer het later opnieuw.';
      })
      .finally(() => {
        this.loading = false;
      });
  }

  validateForm(): boolean {
    return this.contact.naam.trim() !== '' &&
      this.contact.voornaam.trim() !== '' &&
      this.contact.email.trim() !== '' &&
      /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(this.contact.email) &&
      this.contact.telefoon.trim() !== '' &&
      this.contact.bericht.trim() !== '';
  }
}
