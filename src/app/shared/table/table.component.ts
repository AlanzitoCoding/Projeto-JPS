// Louvado seja o Senhor

import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-table',
  imports: [ButtonComponent],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
 @Input() width : string = "";
 @Input() btnDisplay : string = "";
 @Input() clickFunc! : () => void;
}
