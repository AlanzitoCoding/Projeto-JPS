// Louvado seja o Senhor

import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { TableComponent } from "../../shared/table/table.component";

@Component({
  selector: 'app-vendas',
  imports: [HeaderComponent, TableComponent],
  templateUrl: './vendas.component.html',
  styleUrl: './vendas.component.css'
})
export class VendasComponent {

}
