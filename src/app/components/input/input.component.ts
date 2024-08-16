import { Component, Input, forwardRef } from '@angular/core'
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR
} from '@angular/forms'

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder: string = ''
  @Input() type: 'text' | 'password' = 'text'

  private innerValue: any = ''
  private onTouched: () => void = () => {}
  private onChanged: (value: any) => void = () => {}

  @Input()
  set formControl(value: FormControl) {
    this.innerValue = value.value
    value.valueChanges.subscribe((val) => {
      this.innerValue = val
      this.onChanged(val)
    })
  }

  writeValue(value: any): void {
    this.innerValue = value
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChanged = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  setDisabledState?(isDisabled: boolean): void {}
}
