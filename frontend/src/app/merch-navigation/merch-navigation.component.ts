import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-merch-navigation',
  standalone: true,
  imports: [
    NgClass,
    RouterLink
  ],
  templateUrl: './merch-navigation.component.html',
  styleUrls: ['./merch-navigation.component.css']
})
export class MerchNavigationComponent {
  menuOpen = false;
  dropdownOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  toggleDropdown(event: Event): void {
    event.preventDefault();
    event.stopPropagation(); // voorkomt dat document:click het direct sluit
    this.dropdownOpen = !this.dropdownOpen;
  }
  closeDropdown(): void {
    this.dropdownOpen = false;
    this.menuOpen = false; // Optioneel: sluit ook hoofdmenu
  }
  scrollToSection(sectionId: string, event: Event): void {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.menuOpen = false;
    }
  }

  @HostListener('document:click', ['$event'])
  closeMenusOnOutsideClick(event: Event): void {
    const nav = document.querySelector('.animenu__nav');
    const button = document.querySelector('.animenu__btn');

    if (
      nav && !nav.contains(event.target as Node) &&
      button && !button.contains(event.target as Node)
    ) {
      this.menuOpen = false;
      this.dropdownOpen = false;
    }
  }

  @HostListener('window:resize', [])
  onResize(): void {
    // Sluit menu bij resize naar desktop formaat
    if (window.innerWidth > 767) {
      this.menuOpen = false;
      this.dropdownOpen = false;
    }
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    this.menuOpen = false;
    this.dropdownOpen = false;
  }
}
