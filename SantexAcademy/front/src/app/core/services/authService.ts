import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from 'src/app/models/login-user';
import { Users } from 'src/app/models/users';
import { JwtDto } from 'src/app/models/JwtDto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = 'https://localhost:3000/auth';

  constructor(private httpClient: HttpClient) { }


  public new(users: Users): Observable<any>{
    return this.httpClient.post<any>(this.authURL + 'nuevo', users);
  }

  public login(loginUser: LoginUser): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login', loginUser);
  }

}