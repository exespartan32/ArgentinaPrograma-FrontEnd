import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  URL = environment.URL + 'personas/'
  //URL = 'https://back-end-argentina-programa.herokuapp.com/personas/'
  constructor(private httpClient: HttpClient) { }

  // devuelve la persona
  public getPersona(): Observable<Persona> {
    const dataPersons = this.httpClient.get<Persona>(this.URL + 'traer/perfil')
    return dataPersons
  }

  // busca una persona por id
  public detail(id: number): Observable<Persona> {
    const dataPerson = this.httpClient.get<Persona>(this.URL + `detail/${id}`);
    return dataPerson
  }

  // actualiza una persona
  public update(id: number, persona: Persona): Observable<any> {
    console.log(persona)
    return this.httpClient.put<any>(this.URL + `update/${id}`, persona);
  }

}
