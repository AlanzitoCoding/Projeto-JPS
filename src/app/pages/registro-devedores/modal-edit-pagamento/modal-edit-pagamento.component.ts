// Louvado seja o Senhor

import { Component, inject, Input, model } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { InputComponent } from "../../../shared/input/input.component";
import { ModalComponent } from "../../../shared/modal/modal.component";
import { FormsModule, NgForm } from '@angular/forms';
import { PagamentoDivida } from '../../../models/clientes.model';
import { ClientesService } from '../../../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-edit-pagamento',
  imports: [ButtonComponent, InputComponent, ModalComponent, FormsModule],
  templateUrl: './modal-edit-pagamento.component.html',
  styleUrl: './modal-edit-pagamento.component.css'
})
export class ModalEditPagamentoComponent {
  isEditPagamentoOpen = model(false);
  @Input() registro! : PagamentoDivida; 
  apiService = inject(ClientesService); 
  router = inject(Router);

  ngOnChanges() : void{
    if(this.registro){
      this.loadFormInfo();
    }
  }

  formValues = {
    valorPagamento: "",
    dataPagamento: ""
  }

  reloadComponent() {
    const url = this.router.url; 
  
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]);
    });
  }

  loadFormInfo(){
    this.formValues.valorPagamento = this.registro.valorPagamento.toString();
    this.formValues.dataPagamento = new Date(this.registro.dataPagamento)
    .toISOString().split("T")[0];
  }

  editPagamentoDivida(form : NgForm){
    this.apiService
    .updatePagamentoDivida(this.registro.pagDividasID, form.value.valorPagamento, form.value.dataPagamento, this.registro.clienteID_FK)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.isEditPagamentoOpen.set(false);
        this.reloadComponent();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
