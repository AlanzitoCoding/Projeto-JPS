// Louvado seja o Senhor

import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from "../../shared/header/header.component";
import { TableComponent } from "../../shared/table/table.component";
import { ModalComponent } from "../../shared/modal/modal.component";
import { InputComponent } from "../../shared/input/input.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-estoque',
  imports: [HeaderComponent, TableComponent, ModalComponent, InputComponent, ButtonComponent, FormsModule],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {
  isModalOpen = signal(false);
  private readonly produtosService = inject(ProdutosService);

  openModal = () => {
    this.isModalOpen.set(true);
  }

  addProduto(form : NgForm){
    console.log(form.value);
    this.produtosService.addNewProduto(form.value.nomeProduto, form.value.valorProduto, form.value.categoriaProduto).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
