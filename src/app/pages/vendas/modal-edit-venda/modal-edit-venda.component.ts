// Louvado seja o Senhor

import { Component, inject, Input, model } from '@angular/core';
import { ModalComponent } from "../../../shared/modal/modal.component";
import { InputComponent } from "../../../shared/input/input.component";
import { FormsModule, NgForm } from '@angular/forms';
import { RegistroVenda, TipoCompra } from '../../../models/vendas.model';
import { VendasService } from '../../../services/vendas.service';
import { Router } from '@angular/router';
import { ButtonComponent } from "../../../shared/button/button.component";
import { KeyValuePipe, NgForOf } from '@angular/common';

@Component({
  selector: 'app-modal-edit-venda',
  imports: [ModalComponent, InputComponent, FormsModule, ButtonComponent, NgForOf, KeyValuePipe],
  templateUrl: './modal-edit-venda.component.html',
  styleUrl: './modal-edit-venda.component.css'
})
export class ModalEditVendaComponent {
  isEditVendaOpen = model(false);
  @Input() registro! : RegistroVenda; 
  apiService = inject(VendasService); 
  tipoCompraEnum = TipoCompra;
  router = inject(Router);

  ngOnChanges() : void{
    if(this.registro){
      this.loadFormInfo();
    }
  }

  formValues = {
    nomeComprador: "",
    vendaValor: "",
    vendaData: "",
    tipoCompra: ""
  }

  reloadComponent() {
    const url = this.router.url; 
  
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]);
    });
  }

  loadFormInfo(){
    this.formValues.nomeComprador = this.registro.nomeComprador!;
    this.formValues.vendaValor = this.registro.vendaValor.toString();
    this.formValues.vendaData = new Date(this.registro.vendaDataRegistro)
    .toISOString().split("T")[0];
    this.formValues.tipoCompra = this.registro.tipoCompra;
  }

  editVenda(form : NgForm){
    this.apiService
    .updateVenda(this.registro.vendaID, form.value.dataCompra, form.value.valorCompra, form.value.nomeComprador, form.value.tipoCompra)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.isEditVendaOpen.set(false);
        this.reloadComponent();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
