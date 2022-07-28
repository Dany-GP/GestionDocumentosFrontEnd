import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Documentos',
        icon: 'pi pi-fw pi-book',
        items: [
          {
            label: 'Nuevo',
            icon: 'pi pi-fw pi-plus',
            routerLink: 'agregar-doc'
          },
          {
            label: 'Ver',
            icon: 'pi pi-fw pi-list',
            routerLink: 'ver-docs'
          }

        ]
      },
      {
        label: 'Tipos de documentos',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Nuevo',
            icon: 'pi pi-fw pi-plus',
            routerLink: 'agregar-tipo'
          },
          {
            label: 'Ver',
            icon: 'pi pi-fw pi-list',
            routerLink: 'ver-tipos'
          }
        ]
      },
      {
        label: 'Trámites',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Nuevo',
            icon: 'pi pi-fw pi-plus',
            routerLink: 'agregar-tramite'
          },
          {
            label: 'Ver',
            icon: 'pi pi-fw pi-list',
            routerLink: 'ver-tramites'
          }
        ]
      }
    ];
  }



}
