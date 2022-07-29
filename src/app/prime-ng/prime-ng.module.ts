import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import {DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    DialogModule,
    TableModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    InputTextModule,
    CardModule, 
    DropdownModule,
    CalendarModule,
    SelectButtonModule,
    MessageModule,
    MessagesModule,
    ToastModule
  ],
  exports:[
    MenubarModule,
    DialogModule,
    TableModule,
    BrowserAnimationsModule,
    ButtonModule,
    ConfirmDialogModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    CalendarModule,
    SelectButtonModule,
    MessageModule,
    MessagesModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
