import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  URL = environment.URL + 'banner/';
  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.URL + 'list');
  }

  public detail(id: number): Observable<Banner>{
    return this.httpClient.get<Banner>(this.URL + `detail/${id}`);
  }

  public save(banner: Banner): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', banner);
  }

  public update(id: number, banner: Banner): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, banner);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

  public getBanner(): Observable<Banner> {
    const dataBanner = this.httpClient.get<Banner>(this.URL + 'traer')
    return dataBanner
  }
}
