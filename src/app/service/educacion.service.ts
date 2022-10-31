import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  URL = environment.URL + 'educacion/';
  //URL = 'http://localhost:8080/educacion/';
  //URL = 'https://back-end-argentina-programa.herokuapp.com/educacion/';

  constructor(private httpClient : HttpClient) { }

  // lista las educaciones que existen
  public lista(): Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.URL + 'list');
  }

  // busca una educacion por id
  public detail(id: number): Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.URL + `detail/${id}`);
  }

  // crea una nueva educacion
  public save(educacion: Educacion): Observable<any>{
    console.log(educacion)
    return this.httpClient.post<any>(this.URL + 'create', educacion);
  }

  // actualiza una educacion
  public update(id: number, educacion: Educacion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, educacion);
  }

  // borra una educacion
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
