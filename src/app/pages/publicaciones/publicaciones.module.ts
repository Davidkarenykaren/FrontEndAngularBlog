import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicacionesRoutingModule } from './publicaciones-routing.module';
import { PublicacionesComponent } from './publicaciones.component';
import { PublicacionComponent } from './publicacion/publicacion.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PublicacionesComponent, PublicacionComponent],
  imports: [
    CommonModule,
    PublicacionesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PublicacionesModule { }
