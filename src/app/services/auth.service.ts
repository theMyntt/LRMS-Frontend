import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { enviroment } from '../../enviroments/enviroment'
import { LoginResponse } from '../models/loginResponse.model'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${enviroment.api}/api/user/login`,
      {
        email,
        password
      }
    )
  }
}
