// Louvado seja o Senhor

import { Component, inject, Input, model } from '@angular/core';
import { RegistroVenda } from '../../../models/vendas.model';
import { VendasService } from '../../../services/vendas.service';
import { Router } from '@angular/router';
import { ModalComponent } from "../../../shared/modal/modal.component";
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-modal-delete-venda',
  imports: [ModalComponent, ButtonComponent],
  templateUrl: './modal-delete-venda.component.html',
  styleUrl: './modal-delete-venda.component.css'
})
export class ModalDeleteVendaComponent {
  isDeleteVendaModalOpen = model(false);
  @Input() registro! : RegistroVenda; 
  apiService = inject(VendasService); 
  router = inject(Router);

  reloadComponent() {
    const url = this.router.url; 
  
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([url]);
    });
  }

  deleteVenda(){
    console.log(this.registro.vendaID);

    this.apiService.deleteVenda(this.registro.vendaID)
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
    this.isDeleteVendaModalOpen.set(false);
  }
}
