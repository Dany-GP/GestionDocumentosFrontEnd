import { Component, OnInit } from '@angular/core';
import { TipoDocumento } from '../interfaces/TipoDocumento';
import { TiposDocumentoService } from '../services/tipos-documento.service';
import { Documento } from '../interfaces/Documento';
import { DocumentosService } from '../services/documentos.service';
import { MessageService } from 'primeng/api';

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
  fecha!: Date | undefined;



  constructor(
    private tiposDocumentoService: TiposDocumentoService,
    private documentosService: DocumentosService,
    private messageService: MessageService
  ) {
    this.tiposDocumentoService.obtenerTipos().subscribe(
      {
        next:
          (tiposDocumento) => {
            this.tiposDocumentos = tiposDocumento;
            console.log(tiposDocumento);
          },
        error:
          (error) => {
            console.log(error);
            return;
          }
      }
    )
  }

  notificarInsertado() {
    this.messageService.add({ severity: 'success', summary: 'Elemento agregado', detail: 'El elemento ha sido agregado exitosamente' });
  }

  notificarError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Los datos recolectados contienen un error, por favor compruebe de nuevo los datos' });
  }

  clear() {
    this.messageService.clear();
    window.location.reload();
  }

  limpiarCajas(){
    this.nombre = '';
    this.fecha = undefined;
    this.estado = 'activado';
  }


  ngOnInit(): void {
  }

  agregarDoc() {

    if (this.nombre.trim().length < 3 || this.fecha == null) {
      this.notificarError();
      return;
    }

    let documento: Documento = {
      codigo: 0,
      nombre: this.nombre,
      tipoDocumento: this.tipo.codigo,
      fecha: this.fecha,
      activo: this.estado === 'activado' ? true : false
    }

    this.documentosService.agregarDocumento(documento).subscribe(
      {
        next:
          (response) => {
            console.log(response);
          },
        error:
          (error) => {
            console.log(error);
          }
      }
    )
    this.notificarInsertado();
    this.limpiarCajas();

  }

}
