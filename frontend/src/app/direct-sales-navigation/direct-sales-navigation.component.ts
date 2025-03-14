import {Component, HostListener} from '@angular/core';
import {NgClass} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-direct-sales-navigation',
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './direct-sales-navigation.component.html',
  styleUrl: './direct-sales-navigation.component.css'
})
export class DirectSalesNavigationComponent {
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
