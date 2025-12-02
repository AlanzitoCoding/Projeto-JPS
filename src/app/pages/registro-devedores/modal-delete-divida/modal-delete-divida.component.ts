// Louvado seja o Senhor

import { Component, inject, Input, model } from '@angular/core';
import { ModalComponent } from "../../../shared/modal/modal.component";
import { ButtonComponent } from "../../../shared/button/button.component";
import { RegistroDivida } from '../../../models/clientes.model';
import { ClientesService } from '../../../services/clientes.service';
import { Router } from '@angular/router';
import { VendasComponent } from '../../vendas/vendas.component';
import { VendasService } from '../../../services/vendas.service';

@Component({
  selector: 'app-modal-delete-divida',
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './modal-delete-divida.component.html',
  styleUrl: './modal-delete-divida.component.css'
})
export class ModalDeleteDividaComponent {
  isDeleteRegistroModalOpen = model(false);
  @Input() registro! : RegistroDivida; 
  apiService = inject(VendasService); 
  router = inject(Router);

  reloadComponent() {
    const url = this.router.url; 
  
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]);
    });
  }

  deleteRegistroDivida(){
    this.apiService.deleteVenda(this.registro.vendaID_FK)
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
    this.isDeleteRegistroModalOpen.set(false);
  }
}
