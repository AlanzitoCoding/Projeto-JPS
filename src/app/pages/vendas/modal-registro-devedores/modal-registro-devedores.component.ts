// Louvado seja o Senhor

import { Component, model } from '@angular/core';
import { ModalComponent } from "../../../shared/modal/modal.component";

@Component({
  selector: 'app-modal-registro-devedores',
  imports: [ModalComponent],
  templateUrl: './modal-registro-devedores.component.html',
  styleUrl: './modal-registro-devedores.component.css'
})
export class ModalRegistroDevedoresComponent {
  isRegistroDevedoresOpen = model(false);
}
