// Louvado seja o Senhor 

import { Component } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
  selector: 'app-home',
  imports: [CardComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
