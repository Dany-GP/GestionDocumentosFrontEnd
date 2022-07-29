import { Component, OnInit } from '@angular/core';
import { DocumentosService } from '../services/documentos.service';
import { Documento } from '../interfaces/Documento';
import { ConfirmationService } from 'primeng/api';
import { TipoDocumento } from '../interfaces/TipoDocumento';
import { TiposDocumentoService } from '../services/tipos-documento.service';

@Component({
  selector: 'app-ver-documentos',
  templateUrl: './ver-documentos.component.html'
})
export class VerDocumentosComponent implements OnInit {


  documentos: Documento[] = [];
  nombre: string = '';
  tiposDocumentos: TipoDocumento[] = [];
  tipo!: TipoDocumento;
  fecha!: Date;
  estados: string[] = ['activado', 'desactivado'];
  estado: string = 'activado';
  documentoActual: Documento = {
    codigo: 0,
    nombre: '',
    fecha: new Date(),
    tipoDocumento: 1,
    activo: true
  };

  constructor(
    private documentosService: DocumentosService,
    private tiposDocumentoService: TiposDocumentoService,
    private confirmationService: ConfirmationService
  ) {
    this.documentosService.obtenerDocumentos().subscribe(
      {
        next:
          (documentos) => {
            this.documentos = documentos;
            console.log(documentos);
          },
        error:
          (error) => {
            console.log(error);
          }
      }
    );
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
    );
  }
  display: boolean = false;

  showDialog(id: number) {
    this.display = true;
    this.documentosService.obtenerDocumento(id).subscribe(
      {
        next: 
          (value) => {
            console.log(value);
            this.documentoActual = value;
          }
      }
    );
    console.log(this.documentoActual);
    
  }

  editarDocumento() {

    this.documentosService.atualizarDocumento(this.documentoActual).subscribe(
      {
        next(value) {
            console.log(value)
        },
        error(err) {
            console.log(err);
            
        },
      }
    )

    this.display = false;
  }

  confirm(id: number) {
    this.confirmationService.confirm({
      message: '¿Está seguro que desea eliminar este elemento?',
      header: 'Eliminar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        console.log(id);
        this.documentosService.eliminarDocumento(id).subscribe(
          response => {
            this.documentosService.obtenerDocumentos().subscribe(
              {
                next:
                  (documentos) => {
                    this.documentos = documentos;
                    console.log(documentos);
                  },
                error:
                  (error) => {
                    console.log(error);
                  }
              }
            );
          }
        );
      }
    });
  }

  ngOnInit(): void {

  }

}
