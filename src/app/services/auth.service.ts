import { HttpClient } from '@angular/common/http'
import { Injectable, signal } from '@angular/core'
import { enviroment } from '../../enviroments/enviroment'
import { LoginResponse } from '../models/loginResponse.model'
import { catchError, Subscription, throwError } from 'rxjs'
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
        catchError(
          (err: {
            error: { title: string; message: string; statusCode: number }
          }) => {
            return throwError(
              () => new Error(err.error.message ?? err.error.title)
            )
          }
        )
      )
      .subscribe((response) => {
        this.id.set(response.id)
        this.name.set(response.name)
        this.router.navigate(['/dashboard'])
      })
  }
}
