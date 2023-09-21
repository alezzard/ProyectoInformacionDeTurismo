import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/questions';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SQuestionService {

  URL = environment.API_URL + 'question_answer/';

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Question[]>{
    return this.httpClient.get<Question[]>(this.URL);
  }
  
  public detail(id: number): Observable<Question>{
    return this.httpClient.get<Question>(this.URL + `${id}`);
  } 

  public save(question:Question): Observable<any>{
    return this.httpClient.post<any>(this.URL , question);
  }

  public update(id: number, question:Question): Observable<any>{
    return this.httpClient.put<any>(this.URL + `${id}`,question);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `${id}`);
  }


}
