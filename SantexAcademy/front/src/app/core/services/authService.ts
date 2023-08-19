import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginUser } from 'src/app/models/login-user';
import { Users } from 'src/app/models/users';
import { JwtDto } from 'src/app/models/JwtDto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = environment.API_URL;

  constructor(private httpClient: HttpClient) { }


  public new(users: Users): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'user', users);
  }

  public login(loginUser: LoginUser): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.URL + 'login', loginUser);
  }

}