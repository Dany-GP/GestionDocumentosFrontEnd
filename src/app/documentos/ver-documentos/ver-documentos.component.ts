import { Component, OnInit } from '@angular/core';
import { DocumentosService } from '../services/documentos.service';
import { Documento } from '../interfaces/Documento';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-ver-documentos',
  templateUrl: './ver-documentos.component.html'
})
export class VerDocumentosComponent implements OnInit {


  documentos: Documento[] = [];

  constructor(
    private documentosService: DocumentosService,
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
  }
  display: boolean = false;

  showDialog() {
    this.display = true;
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
