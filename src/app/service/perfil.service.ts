import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Perfil } from '../model/acercaDe';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
  URL = environment.URL + 'perfil/'
  constructor(private httpClient: HttpClient) { }

    // devuelve el primer perfil
    public getProfile(): Observable<Perfil> {
      const dataProfile = this.httpClient.get<Perfil>(this.URL + 'traer/acercaDe')
      //console.log(dataProfile)
      return dataProfile
    }

  // devuelve una lista con todos los perfiles
  public getProfiles(): Observable<Perfil> {
    const dataProfile = this.httpClient.get<Perfil>(this.URL + 'list')
    return dataProfile
  }

  // devuelbe perfil por id
  public detail(id: number): Observable<Perfil> {
    const dataProfile = this.httpClient.get<Perfil>(this.URL + `detail/${id}`);
    return dataProfile
  }

  // actualiza un perfil
  public update(id: number, perfil: Perfil): Observable<any> {
    console.log(id)
    console.log(perfil)
    return this.httpClient.put<any>(this.URL + `update/${id}`, perfil);
  }
}
