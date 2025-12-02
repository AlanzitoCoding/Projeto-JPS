// Louvado seja o Senhor

import { Component, inject, Input, model } from '@angular/core';
import { ModalComponent } from "../../../shared/modal/modal.component";
import { InputComponent } from "../../../shared/input/input.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { FormsModule, NgForm } from '@angular/forms';
import { RegistroDivida } from '../../../models/clientes.model';
import { Router } from '@angular/router';
import { VendasService } from '../../../services/vendas.service';
import { TipoCompra } from '../../../models/vendas.model';

@Component({
  selector: 'app-modal-edit-divida',
  imports: [ModalComponent, InputComponent, ButtonComponent, FormsModule],
  templateUrl: './modal-edit-divida.component.html',
  styleUrl: './modal-edit-divida.component.css'
})
export class ModalEditDividaComponent {
  isEditDividaOpen = model(false);
  @Input() registro! : RegistroDivida; 
  @Input() clienteNome! : string; 
  apiService = inject(VendasService); 
  router = inject(Router);

  ngOnChanges() : void{
    if(this.registro){
      this.loadFormInfo();
    }
  }

  formValues = {
    valorDivida: "",
    dataDivida: ""
  }

  reloadComponent() {
    const url = this.router.url; 
  
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]);
    });
  }

  loadFormInfo(){
    this.formValues.valorDivida = this.registro.valorDivida.toString();
    this.formValues.dataDivida = new Date(this.registro.dataDivida)
    .toISOString().split("T")[0];
  }

  editRegistroDivida(form : NgForm){
    this.apiService
    .updateVenda(this.registro.vendaID_FK, form.value.dataDivida, form.value.valorDivida, this.clienteNome, TipoCompra.divida)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.isEditDividaOpen.set(false);
        this.reloadComponent();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
