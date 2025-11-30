// Louvado seja o Senhor

import { Component, inject, Input, model } from '@angular/core';
import { ModalComponent } from "../../../shared/modal/modal.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { ClientesService } from '../../../services/clientes.service';
import { Router } from '@angular/router';
import { PagamentoDivida } from '../../../models/clientes.model';

@Component({
  selector: 'app-modal-delete-pagamento',
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './modal-delete-pagamento.component.html',
  styleUrl: './modal-delete-pagamento.component.css'
})
export class ModalDeletePagamentoComponent {
  isDeletePagamentoModalOpen = model(false);
  @Input() registro! : PagamentoDivida; 
  apiService = inject(ClientesService); 
  router = inject(Router);

  reloadComponent() {
    const url = this.router.url; 
  
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]);
    });
  }

  deletePagamentoDivida(){
    this.apiService.deletePagamentoDivida(this.registro.pagDividasID, this.registro.clienteID_FK)
    .subscribe({
      next: (res) => {
        console.log(res);
        this.closeDeleteModal();
        this.reloadComponent();
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  closeDeleteModal(){
    this.isDeletePagamentoModalOpen.set(false);
  }
}
