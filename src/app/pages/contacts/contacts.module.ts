import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { IconoContactoComponent } from "../../components/icono-contacto/icono-contacto.component";
import { TarjetaContactoComponent } from "../../components/tarjeta-contacto/tarjeta-contacto.component";


@NgModule({
    declarations: [
        ContactsComponent
    ],
    imports: [
        CommonModule,
        ContactsRoutingModule,
        TarjetaContactoComponent
    ]
})
export class ContactsModule { }
