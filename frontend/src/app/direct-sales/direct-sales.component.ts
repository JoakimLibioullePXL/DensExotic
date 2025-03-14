import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { NgClass } from '@angular/common';
import {DirectSalesNavigationComponent} from '../direct-sales-navigation/direct-sales-navigation.component';
import {DirectSalesFooterComponent} from '../direct-sales-footer/direct-sales-footer.component';

@Component({
  selector: 'app-direct-sales',
  standalone: true,
  imports: [FormsModule, DirectSalesNavigationComponent, DirectSalesFooterComponent],
  templateUrl: './direct-sales.component.html',
  styleUrl: './direct-sales.component.css'
})
export class DirectSalesComponent {



}
