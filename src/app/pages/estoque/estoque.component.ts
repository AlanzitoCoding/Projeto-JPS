// Louvado seja o Senhor

import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { ProdutosTableComponent } from "./produtos-table/produtos-table.component";

@Component({
  selector: 'app-estoque',
  imports: [HeaderComponent, ProdutosTableComponent],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {

}
