import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError } from 'rxjs';
import { Users } from 'src/app/models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL = environment.API_URL + 'user/';

  constructor(private httpClient: HttpClient) { }

  public getPersona(): Observable<Users>{
    return this.httpClient.get<Users>(this.URL).pipe(
      catchError((error: any) => {
        console.error('Error al obtener el usuario:', error);
        throw error; 
      })
    );
  }

  public detail(id: number): Observable<Users>{
    return this.httpClient.get<Users>(this.URL + `/${id}`);
  }
}
