import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'custom-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input()
  placeholder: string = ''

  @Input()
  type: 'text' | 'password' = 'text'

  @Input({ required: true })
  formControl!: FormControl
}
