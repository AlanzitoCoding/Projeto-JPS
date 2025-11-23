// Louvado seja o Senhor

import { Component, model } from '@angular/core';
import { ModalComponent } from "../../../shared/modal/modal.component";
import { FormsModule, NgForm } from '@angular/forms';
import { InputComponent } from "../../../shared/input/input.component";
import { ButtonComponent } from "../../../shared/button/button.component";

@Component({
  selector: 'app-modal-pagamento',
  imports: [ModalComponent, FormsModule, InputComponent, ButtonComponent],
  templateUrl: './modal-pagamento.component.html',
  styleUrl: './modal-pagamento.component.css'
})
export class ModalPagamentoComponent {
  isPagamentoOpen = model(false);

  realizarPagamento(form : NgForm){

  }
}
