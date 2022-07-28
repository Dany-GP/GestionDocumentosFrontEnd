import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TipoDocumento } from '../interfaces/TipoDocumento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiposDocumentoService {

  url: string = 'https://localhost:7055/api/TiposDocumento';

  tiposDocumentos: TipoDocumento[] = [];

  obtenerTipos(): Observable<TipoDocumento[]>{
    return this.http.get<TipoDocumento[]>(this.url);
  }


  constructor(private http: HttpClient) { }
}
