import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizargeneroComponent } from './actualizargenero/actualizargenero.component';
import { MantGenerosComponent } from './mant-generos/mant-generos.component';
import { NuevogeneroComponent } from './nuevogenero/nuevogenero.component';

const routes: Routes = [
  {
    path: '',
    component: MantGenerosComponent
  },
  {
    path: 'nuevo',
    component: NuevogeneroComponent
  },
  {
    path: 'editar',
    component: ActualizargeneroComponent
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class GenerosRoutingModule { }
