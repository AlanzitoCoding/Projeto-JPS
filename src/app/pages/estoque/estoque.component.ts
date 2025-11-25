// Louvado seja o Senhor

import { afterRender, Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from "../../shared/header/header.component";
import { TableComponent } from "../../shared/table/table.component";
import { ModalComponent } from "../../shared/modal/modal.component";
import { InputComponent } from "../../shared/input/input.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { ProdutosService } from '../../services/produtos.service';
import { Produtos } from '../../models/produto.model';
import { tap } from 'rxjs';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-estoque',
  imports: [HeaderComponent, TableComponent, ModalComponent, InputComponent, ButtonComponent, FormsModule, NgForOf],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {
  private readonly produtosService = inject(ProdutosService);
  isModalOpen = signal(false);
  public produtos : Produtos = [];

  public ngOnInit() : void{
    this.loadProdutos();
  }

  openModal = () => {
    this.isModalOpen.set(true);
  }

  addProduto(form : NgForm){
    console.log(form.value);
    this.produtosService
    .addNewProduto(form.value.nomeProduto, form.value.valorProduto, form.value.categoriaProduto)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.loadProdutos();
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  loadProdutos(){
    this.produtosService
    .showProdutos()
    .pipe(tap((produtos : Produtos) => (this.produtos = produtos)))
    .subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
