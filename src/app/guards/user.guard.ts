import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanLoad {

  constructor(private userService: UserService) { }

  canLoad(): Observable<boolean> | Promise<boolean> {
    return this.userService.validarUsuario();//valida que el usuario trata de ingresar a una ruta y chequea si tiene token o no almacenaso en la cache del navegador

  }
}

