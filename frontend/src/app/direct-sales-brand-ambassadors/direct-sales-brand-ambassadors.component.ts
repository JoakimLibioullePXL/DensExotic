import { Component } from '@angular/core';
import {DirectSalesNavigationComponent} from '../direct-sales-navigation/direct-sales-navigation.component';
import {DirectSalesFooterComponent} from '../direct-sales-footer/direct-sales-footer.component';

@Component({
  selector: 'app-direct-sales-brand-ambassadors',
  imports: [
    DirectSalesNavigationComponent,
    DirectSalesFooterComponent
  ],
  templateUrl: './direct-sales-brand-ambassadors.component.html',
  styleUrl: './direct-sales-brand-ambassadors.component.css'
})
export class DirectSalesBrandAmbassadorsComponent {
  ambassador = {
    name: 'Pieterjan',
    image: 'assets/direct-sales/pieterjan.jpg',
    description: `Mijn naam is Pieterjan<br><br>

  Ik was nooit echt goed in school en had vaak moeite om met leerkrachten overweg te komen. In mijn jeugd heb ik maar liefst 10 verschillende richtingen geprobeerd. Daarnaast heb ik in een internaat gezeten. Uiteindelijk koos ik voor deeltijds onderwijs en behaalde ik mijn diploma.<br><br>

  Na mijn opleiding ben ik aan de slag gegaan als sous-chef in een restaurant. Na drie jaar realiseerde ik me dat dit niet het werk was wat ik de rest van mijn leven wilde doen. Ik wilde iets doen in de verkoop en een eigen business opbouwen.<br><br>

  Op een dag kwam ik een vacature tegen voor sales verantwoordelijke op Indeed. Toen ik bij dit bedrijf solliciteerde, zag ik meteen de enorme schaal van het bedrijf, de vele doorgroeimogelijkheden, en de kansen voor persoonlijke ontwikkeling. Ook was ik onder de indruk van de potentie om veel geld te verdienen.<br><br>

  Ik kreeg de kans om naar Londen en Ibiza te gaan voor extra educatie en fantastische reizen. Ondertussen leid ik een team van meer dan 10 mensen en ben ik hard op weg om mijn eigen kantoor te openen, na een jaar in de business te zitten.<br><br>

  <strong>Mijn ambitie</strong><br><br>

  Mijn ambitie is om een organisatie te leiden in het buitenland en mijn ouders te helpen met hun financiële stress. Daarnaast wil ik mijn grootouders trots maken, wat mijn grootste drijfveer is in het leven. Ik ben vastbesloten om anderen de kans te geven om te zien wat er mogelijk is door een business in sales op te bouwen, zodat ook zij hun doelen kunnen bereiken.`
  };

}
