import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Documento } from '../interfaces/Documento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  url: string = 'https://localhost:7055/api/Documentos';

  private _documentos : Documento[] = [];

  get documentos(){
    return [...this._documentos];
  }

  obtenerDocumentos(): Observable<Documento[]>{
    return this.http.get<Documento[]>(this.url);
  }

  agregarDocumento(documento: Documento): Observable<Documento>{
    return this.http.post<Documento>(this.url, documento);
  }

  eliminarDocumento(id: number){
    return this.http.delete(this.url +'/'+id);
  }

  constructor(private http: HttpClient) {
    
   }
}
