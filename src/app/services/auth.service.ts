import { HttpClient } from '@angular/common/http'
import { Injectable, signal } from '@angular/core'
import { enviroment } from '../../enviroments/enviroment'
import { LoginResponse } from '../models/loginResponse.model'
import { catchError, Subscription } from 'rxjs'
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public id = signal<string>('')
  public name = signal<string>('')

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) {}

  login(email: string, password: string) {
    this.httpClient
      .post<LoginResponse>(`${enviroment.api}/api/user/login`, {
        email,
        password
      })
      .pipe(
        catchError(() => {
          throw new Error('Não foi possivel fazer o login')
        })
      )
      .subscribe((response) => {
        this.id.set(response.id)
        this.name.set(response.name)
      })

    return this.router.navigate(['/login'])
  }
}
