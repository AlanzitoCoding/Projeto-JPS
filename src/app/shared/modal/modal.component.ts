// Louvado seja o Senhor

import { Component, ElementRef, Input, afterRender, model, viewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() width : string = "";
  @Input() height : string = "";
  
  modal = viewChild.required<ElementRef<HTMLDialogElement>>('modal');
  isOpen = model(false);

  closeModal(){
    this.isOpen.set(false);
  }

  constructor(){
    afterRender(() => {
      if(this.isOpen()){
        this.modal().nativeElement.showModal();
      }
      else{
        this.modal().nativeElement.close();
      }
    })
  }
}
