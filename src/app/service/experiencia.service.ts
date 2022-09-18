import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  expURL = 'http://localhost:8080/explab/';
  //expURL = 'https://back-end-argentina-programa.herokuapp.com/explab/';

  constructor(private httpClient: HttpClient) { }

  // lista las experiencias que existen
  public lista(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.expURL + 'lista');
  }

  // busca una experiencia por id
  public detail(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.expURL + `detail/${id}`);
  }

  // crea una nueva experiencia
  public save(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.expURL + 'create', experiencia);
  }

  // actualiza una experiencia
  public update(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.expURL + `update/${id}`, experiencia);
  }

  // borra una experiencia
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
