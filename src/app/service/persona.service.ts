import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = 'http://localhost:8080/personas/'
  //URL = 'https://back-end-argentina-programa.herokuapp.com/personas/'
  constructor(private httpClient: HttpClient) {  }

  public getPersona(): Observable<persona>{
  const dataPersona = this.httpClient.get<persona>(this.URL+'traer/perfil')
    return dataPersona
  }

  public update(id: number, persona: persona ): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }


}
