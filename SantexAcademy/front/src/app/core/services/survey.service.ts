import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Survey } from 'src/app/models/survey';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {
  
  URL = environment.API_URL + 'survey/';

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<Survey[]>{
    return this.httpClient.get<Survey[]>(this.URL);
  }
  
  public detail(id: number): Observable<Survey>{
    return this.httpClient.get<Survey>(this.URL + `${id}`);
  } 

  public createSurvey(survey:Survey): Observable<any>{
    return this.httpClient.post<any>(this.URL , survey);
  }

  public update(id: number, survey:Survey): Observable<any>{
    return this.httpClient.put<any>(this.URL + `${id}`,survey);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `${id}`);
  }

}
