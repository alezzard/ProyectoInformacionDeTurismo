import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';
const EMAIL_KEY = 'AuthEmail';
const AUTHORITIES_KEY = 'AuthAuthorities';
const ID_KEY = 'AuthId';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
}

public getToken(): string {
 return sessionStorage.getItem(TOKEN_KEY)!;
}

public setEmail(userName: string): void {
 window.sessionStorage.removeItem(EMAIL_KEY);
 window.sessionStorage.setItem(EMAIL_KEY, userName);
}

public getEmail(): string {
 return sessionStorage.getItem(EMAIL_KEY)!;
}

public setAuthorities(authorities: string): void {
  window.sessionStorage.removeItem(AUTHORITIES_KEY);
  window.sessionStorage.setItem(AUTHORITIES_KEY, authorities);
/*  window.sessionStorage.removeItem(AUTHORITIES_KEY);
 window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities)) */;
}

public getAuthorities(): string {
  return sessionStorage.getItem(AUTHORITIES_KEY)!
   /* JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {
     this.roles.push(authority.authority); */
}

public setID(user_id: number): void {
  window.sessionStorage.removeItem(ID_KEY);
  window.sessionStorage.setItem(ID_KEY, user_id);
/*  window.sessionStorage.removeItem(AUTHORITIES_KEY);
 window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities)) */;
}

public getIdUser(): string {
  return sessionStorage.getItem(ID_KEY)!;
 }

public logOut(): void {
 window.sessionStorage.clear();
}

}
