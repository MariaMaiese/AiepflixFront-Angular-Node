import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { MantgifsComponent } from './mantgifs/mantgifs.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { GenerosModule } from './mantenedores/generos/generos.module';
import { MantenedorgifsComponent } from './mantenedorgifs/mantenedorgifs.component';
import { MantenedorGifsComponent } from './mantenedor-gifs/mantenedor-gifs.component';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    LoginComponent,
    MantgifsComponent,
    MantenedorgifsComponent,
    RegistrarComponent,
    MantenedorGifsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ReactiveFormsModule,
    GenerosModule
  ]
})
export class PagesModule { }
