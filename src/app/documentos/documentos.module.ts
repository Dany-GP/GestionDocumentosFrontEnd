import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerDocumentosComponent } from './ver-documentos/ver-documentos.component';
import { AgregarDocumentoComponent } from './agregar-documento/agregar-documento.component';
import { AgregarTipoComponent } from './agregar-tipo/agregar-tipo.component';
import { AgregarTramiteComponent } from './agregar-tramite/agregar-tramite.component';
import { VerTiposComponent } from './ver-tipos/ver-tipos.component';
import { VerTramitesComponent } from './ver-tramites/ver-tramites.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    VerDocumentosComponent,
    AgregarDocumentoComponent,
    AgregarTipoComponent,
    AgregarTramiteComponent,
    VerTiposComponent,
    VerTramitesComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    FormsModule
  ],
  exports:[
    VerDocumentosComponent,
    AgregarDocumentoComponent,
    AgregarTipoComponent,
    AgregarTramiteComponent,
    VerTiposComponent,
    VerTramitesComponent
  ]
})
export class DocumentosModule { }
