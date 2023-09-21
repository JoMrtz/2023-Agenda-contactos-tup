import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleContactoRoutingModule } from './detalle-contacto-routing.module';
import { DetalleContactoComponent } from './detalle-contacto.component';
import { IconoContactoComponent } from 'src/app/components/icono-contacto/icono-contacto.component';


@NgModule({
  declarations: [
    DetalleContactoComponent
  ],
  imports: [
    CommonModule,
    DetalleContactoRoutingModule,
    IconoContactoComponent
  ]
})
export class DetalleContactoModule { }
