import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Publicacion } from '../interfaces/publicacion.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicacionService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) { }

  obtenerPublicaciones(): Observable<Publicacion[]> {
    return this.http.get<Publicacion[]>(this.apiUrl + '/publicaciones');
  }

  agregarPublicacion(prod): Observable<Publicacion[]> {
    return this.http.post<Publicacion[]>(this.apiUrl + '/crear_publicacion', prod);
  }





}
