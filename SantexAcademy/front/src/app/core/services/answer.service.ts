import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Answer } from 'src/app/models/answer';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  URL = environment.API_URL + 'answer/';

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Answer[]>{
    return this.httpClient.get<Answer[]>(this.URL);
  }
  
  public detail(id: number): Observable<Answer>{
    return this.httpClient.get<Answer>(this.URL + `${id}`);
  } 

  public createAnswer(answer:Answer): Observable<any>{
    return this.httpClient.post<any>(this.URL , answer);
  }

  public update(id: number, answer:Answer): Observable<any>{
    return this.httpClient.put<any>(this.URL + `${id}`,answer);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `${id}`);
  }
}
