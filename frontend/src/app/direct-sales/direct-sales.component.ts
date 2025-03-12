import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-direct-sales',
  standalone: true,
  imports: [FormsModule, NgClass],
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

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(sectionId: string, event: Event) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.menuOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnOutsideClick(event: Event) {
    const nav = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');

    if (nav && hamburger && !nav.contains(event.target as Node) && !hamburger.contains(event.target as Node)) {
      this.menuOpen = false;
    }
  }
}
