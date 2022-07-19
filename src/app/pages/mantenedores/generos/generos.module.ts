import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MantGenerosComponent } from './mant-generos/mant-generos.component';
import { NuevogeneroComponent } from './nuevogenero/nuevogenero.component';
import { ActualizargeneroComponent } from './actualizargenero/actualizargenero.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GenerosRoutingModule } from './generos-routing.module';



@NgModule({
  declarations: [
    MantGenerosComponent,
    NuevogeneroComponent,
    ActualizargeneroComponent

  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    GenerosRoutingModule
  ]
})
export class GenerosModule { }
