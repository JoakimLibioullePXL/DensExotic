import { Component } from '@angular/core';
import {DirectSalesNavigationComponent} from '../direct-sales-navigation/direct-sales-navigation.component';
import {DirectSalesFooterComponent} from '../direct-sales-footer/direct-sales-footer.component';

@Component({
  selector: 'app-direct-sales-meet-the-team',
  imports: [
    DirectSalesNavigationComponent,
    DirectSalesFooterComponent
  ],
  templateUrl: './direct-sales-meet-the-team.component.html',
  styleUrl: './direct-sales-meet-the-team.component.css'
})
export class DirectSalesMeetTheTeamComponent {

}
