import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundError } from 'rxjs';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MantgifsComponent } from './pages/mantgifs/mantgifs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { MantenedorgifsComponent } from './pages/mantenedorgifs/mantenedorgifs.component';
import { MantenedorGifsComponent } from './pages/mantenedor-gifs/mantenedor-gifs.component';
import { UserGuard } from './guards/user.guard';
import { AdminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mantenedor-generos',
    loadChildren: () => import('./pages/mantenedores/mant-generos/mant-generos.module').then(m => m.MantGenerosModule),
    canLoad: [AdminGuard]
  }
  ,
  {
    path: 'mantgif',
    component: MantenedorGifsComponent
  },
  {
    path: 'mantenedorpeliculas',
    component: MantenedorgifsComponent
  },
  {
    path: 'registrar',
    component: RegistrarComponent
  }
  ,
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: "**",
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
