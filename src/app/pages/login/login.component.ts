import { Component } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ])
  })

  constructor(private authService: AuthService) {}

  submit() {
    const email: string = this.loginForm.get('email')?.value ?? ''
    const password: string = this.loginForm.get('password')?.value ?? ''

    try {
      this.authService.login(email, password)
    } catch (err: any) {
      console.log(err.message)
    }
  }
}
