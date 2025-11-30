// Louvado seja o Senhor

import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor, Validator {
  @Input() inputType : string = "";
  @Input() inputName : string = "";
  @Input() inputID : string = "";
  @Input() inputPlaceholder : string = "";
  @Input() inputValue : string = "";
  @Input() required = false;  

  value : any = '';

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value : any) : void {
    if (this.inputType === "date" && value) {
      this.value = new Date(value).toISOString().split("T")[0];
    } else {
      this.value = value ?? '';
    }
  }

  registerOnChange(fn : any) : void {
    this.onChange = fn;
  }

  registerOnTouched(fn : any) : void {
    this.onTouched = fn;
  }

  handleInput(e : Event){
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
    this.onTouched();
  }

  validate(control : AbstractControl) : ValidationErrors | null {
    if(this.required && (!control.value || control.value === '')) {
      return { required: true };
    }
    return null;
  }
}
