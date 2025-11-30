// Louvado seja o Senhor

import { Component, inject, Input, model } from '@angular/core';
import { ModalComponent } from "../../../shared/modal/modal.component";
import { InputComponent } from "../../../shared/input/input.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { FormsModule, NgForm } from '@angular/forms';
import { RegistroDivida } from '../../../models/clientes.model';
import { ClientesService } from '../../../services/clientes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-edit-divida',
  imports: [ModalComponent, InputComponent, ButtonComponent, FormsModule],
  templateUrl: './modal-edit-divida.component.html',
  styleUrl: './modal-edit-divida.component.css'
})
export class ModalEditDividaComponent {
  isEditDividaOpen = model(false);
  @Input() registro! : RegistroDivida; 
  apiService = inject(ClientesService); 
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
    .updateRegistroDivida(this.registro.regDividasID, form.value.valorDivida, form.value.dataDivida, this.registro.clienteID_FK)
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
