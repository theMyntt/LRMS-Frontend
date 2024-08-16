import { Component, Input } from '@angular/core'

@Component({
  selector: 'custom-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input()
  type: 'button' | 'submit' = 'button'
}
