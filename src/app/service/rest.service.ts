import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  public get(url: string){
    return this.http.get(url)
  }

  public post(url: string, body){
    return this.http.post(url, body)
  }
}
