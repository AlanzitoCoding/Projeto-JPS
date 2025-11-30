// Louvado seja o Senhor

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() type : string = "";

  @Output() clicked = new EventEmitter<void>();

  emitClick(){
    this.clicked.emit();
  }
}
