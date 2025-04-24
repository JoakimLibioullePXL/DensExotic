import { AfterViewInit, Component, ElementRef } from '@angular/core';
import {MerchNavigationComponent} from '../merch-navigation/merch-navigation.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './merch-landing.component.html',
  imports: [
    MerchNavigationComponent,
    RouterLink
  ],
  styleUrls: ['./merch-landing.component.css']
})
export class MerchLandingComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('show');
        }
      });
    });

    const targets = this.el.nativeElement.querySelectorAll('.scroll-fade');
    targets.forEach((el: Element) => observer.observe(el));
  }
}
