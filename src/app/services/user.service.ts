import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
//import { resolve } from 'dns';
//import { resolve } from 'dns';
import { environment } from 'src/environments/environment';
import { userToken, Usuario } from '../interfaces/interfaces';

const url = environment.URL;



@Injectable({
  providedIn: 'root'
})
export class UserService {
  usuarioLogueado: boolean = false;
  token: any = "";
  userName: string = "";
  userRole: string = "";
  menuItems: any[] = [
    {
      url: 'home',
      text: 'Películas',
      icon: 'bi-film'
    }
  ];


  constructor(private http: HttpClient, private router: Router) { }

  async login(usuario: Usuario) {

    return new Promise(resolve => {
      this.http.post<userToken>(`${url}/user/login`, usuario)
        .subscribe(resp => {
          console.log(resp)
          if (resp.ok) {
            this.guardarToken(resp.token);
            this.leerToken();
            this.setMenuItems();
            resolve(true);
          } else {
            this.borraToken();
            this.setMenuItems();
            resolve(false);
          }

        });
    })
  }

  async registrar(usuario: Usuario) {

    return new Promise(resolve => {
      this.http.post<userToken>(`${url}/user`, usuario)
        .subscribe(resp => {
          console.log(resp)
          if (resp.ok) {
            this.guardarToken(resp.token);
            this.leerToken();
            resolve(true);
          } else {
            this.borraToken();
            resolve(false);
          }
        })

    })
  }

  guardarToken(token: string) {
    localStorage.setItem("token", token); //guardamos el token dentro del local storage
    this.token = token;
    this.usuarioLogueado = true;
  }

  borraToken() {
    localStorage.removeItem("token"); //para borrar el token
  }


  cargarToken() {
    var tokenString = localStorage.getItem("token")?.toString();
    this.token = tokenString;
    if (this.token) {
      this.usuarioLogueado = true;
      this.leerToken()
      this.setMenuItems();
    }
  }

  leerToken() { //decodificar el token
    this.usuarioLogueado = true;
    let jwt = this.token;
    let jwtData = jwt.split('.')[1]; //data que trae el token y trae la posicion 1
    let decodeJSONJwtData = window.atob(jwtData); //decodifica la info del toke en json

    let decodeJwtData = JSON.parse(decodeJSONJwtData);

    console.log(decodeJwtData);

    this.userName = decodeJwtData.user.name;
    this.userRole = decodeJwtData.user.role;
  }

  logout() {
    this.borraToken();
    this.usuarioLogueado = false;
    this.userName = "";
    this.userRole = "";
    this.setMenuItems();
  }

  async validarUsuario(): Promise<boolean> {
    this.cargarToken();
    if (!this.token) {
      this.router.navigate(['/login'])
      return Promise.resolve(false);
    } else {
      return Promise.resolve(true);

    }


  }

  setMenuItems() {
    if (this.usuarioLogueado) {
      this.menuItems = [];
      this.menuItems.push(
        {
          url: 'home',
          text: 'Películas',
          icon: 'bi-film'
        },
        {
          url: 'contact',
          text: 'Gifs',
          icon: 'bi-emoji-smile-upside-down'
        },
        {
          url: 'about',
          text: 'Gifs (2)',
          icon: 'bi-emoji-dizzy'
        }
      );

      if (this.userRole == 'administrador') {
        this.menuItems.push(
          {
            url: 'mantgif',
            text: 'Mant. Gif',
            icon: 'bi-emoji-laughing'
          },
          {
            url: 'mantenedorpeliculas',
            text: 'Mant. Pelis',
            icon: 'bi-camera-video'
          },
          {
            url: 'mantenedor-generos',
            text: 'Mant. Generos',
            icon: 'bi-camera-reels'
          }
        )
      }

    } else {
      this.menuItems = [];
      this.menuItems.push(
        {
          url: 'home',
          text: 'Películas',
          icon: 'bi-film'
        })
    }
  }

  isAdmin() {
    return this.http.get(`${url}/user/checkadmin`)
  }
}
