import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from '../interfaces/TipoDocumento';
import { TiposDocumentoService } from '../services/tipos-documento.service';

@Component({
  selector: 'app-agregar-documento',
  templateUrl: './agregar-documento.component.html'
})
export class AgregarDocumentoComponent implements OnInit {

  tiposDocumentos: TipoDocumento[] = [];
  estados: string[] = ['activado', 'desactivado'];
  tipo!: TipoDocumento;
  nombre: string = '';
  estado: string = 'activado';
  fecha!: Date;

  constructor(tiposDocumentoService: TiposDocumentoService) {
    tiposDocumentoService.obtenerTipos().subscribe(
      {
        next:
          (tiposDocumento) => {
            this.tiposDocumentos = tiposDocumento;
            console.log(tiposDocumento);
          },
        error:
          (error) => {
            console.log(error);
          }
      }
    )
   }

  ngOnInit(): void {
  }

  agregarDoc(){
    console.log(this.nombre);
    console.log(this.tipo);
    console.log(this.estado);
    console.log(this.fecha.getFullYear());
  }

}
