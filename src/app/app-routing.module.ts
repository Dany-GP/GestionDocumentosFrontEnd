import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerDocumentosComponent } from './documentos/ver-documentos/ver-documentos.component';
import { AgregarDocumentoComponent } from './documentos/agregar-documento/agregar-documento.component';
import { AgregarTipoComponent } from './documentos/agregar-tipo/agregar-tipo.component';
import { VerTiposComponent } from './documentos/ver-tipos/ver-tipos.component';
import { AgregarTramiteComponent } from './documentos/agregar-tramite/agregar-tramite.component';
import { VerTramitesComponent } from './documentos/ver-tramites/ver-tramites.component';

const routes: Routes = [
  {
    path: '',
    component: VerDocumentosComponent,
    pathMatch: 'full'
  },
  {
    path: 'agregar-doc',
    component: AgregarDocumentoComponent
  },
  {
    path: 'ver-docs',
    component: VerDocumentosComponent
  },
  {
    path: 'agregar-tipo',
    component: AgregarTipoComponent
  },
  {
    path: 'ver-tipos',
    component: VerTiposComponent
  },
  {
    path: 'agregar-tramite',
    component: AgregarTramiteComponent
  },
  {
    path: 'ver-tramites',
    component: VerTramitesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
