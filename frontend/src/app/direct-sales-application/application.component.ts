import { Component } from '@angular/core';
import {DirectSalesNavigationComponent} from "../direct-sales-navigation/direct-sales-navigation.component";
import {FormsModule} from '@angular/forms';
import emailjs from '@emailjs/browser';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-direct-sales-application',
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './application.component.html',
  styleUrl: './application.component.css'
})
export class ApplicationComponent {

}
