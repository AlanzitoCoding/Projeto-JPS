// Louvado seja o Senhor

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() action! : () => void;
  @Input() type : string = "";

  runFunc(){
    if(this.action){
      this.action();
    }
  }
}
