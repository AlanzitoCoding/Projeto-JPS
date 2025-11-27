// Louvado seja o Senhor

import { afterRender, Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { HeaderComponent } from "../../shared/header/header.component";
import { TableComponent } from "../../shared/table/table.component";
import { ModalComponent } from "../../shared/modal/modal.component";
import { InputComponent } from "../../shared/input/input.component";
import { ButtonComponent } from "../../shared/button/button.component";
import { ProdutosService } from '../../services/produtos.service';
import { Produto, Produtos } from '../../models/produto.model';
import { tap } from 'rxjs';
import { NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-estoque',
  imports: [HeaderComponent, TableComponent, ModalComponent, InputComponent, ButtonComponent, FormsModule, NgForOf, NgIf],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class EstoqueComponent {
  private readonly produtosService = inject(ProdutosService);

  isAddModalOpen = signal(false);
  isEditModalOpen = signal(false);
  isDeleteModalOpen = signal(false);

  public produtos : Produtos = [];
  selectedProd! : Produto;

  public ngOnInit() : void{
    this.loadProdutos();
  }

  openAddModal = () => {
    this.isAddModalOpen.set(true);
  }

  openEditModal = (prodID : number) => {
    this.selectedProd = this.produtos.find(p => p.prodID === prodID)!;
    this.isEditModalOpen.set(true);
  }

  openDeleteModal = (prodID : number) => {
    this.selectedProd = this.produtos.find(p => p.prodID === prodID)!;
    this.isDeleteModalOpen.set(true);
  }

  closeDeleteModal = () => {
    this.isDeleteModalOpen.set(false);
  }

  addProduto(form : NgForm){
    console.log(form.value);
    this.produtosService
    .addNewProduto(form.value.nomeProduto, form.value.valorProduto, form.value.categoriaProduto)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.loadProdutos();
        form.reset();
        this.isAddModalOpen.set(false);
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

  editProduto(form : NgForm){
    console.log(form.value);    

    this.produtosService
    .editProduto(
      form.value.nomeProdutoEdicao,
      form.value.valorProdutoEdicao,
      form.value.categoriaProdutoEdicao,
      this.selectedProd.prodID
    )
    .subscribe({
      next: (res) => {
        console.log(res);
        this.loadProdutos();
        this.isEditModalOpen.set(false);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  deleteProduto = () => {
    const prodID = this.selectedProd.prodID;

    this.produtosService
    .deleteProduto(prodID)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.loadProdutos();
        this.isDeleteModalOpen.set(false);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
