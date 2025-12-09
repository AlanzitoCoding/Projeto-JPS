// Louvado seja o Senhor

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  imports: [ButtonComponent, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
 @Input() width : string = "";
 @Input() overflowHeight : string = "";
 @Input() btnDisplay : string = "";
 @Input() searchDisplay : string = "none";
 @Input() clickFunc! : () => void;

 @Input() searchFn! : (search : string) => void;
 searchText : string = "";

 onSearchChange(){
  if(this.searchFn){
    this.searchFn(this.searchText);
  }
 }
}
