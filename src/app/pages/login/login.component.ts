import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private service: UserService, private router: Router) { }
  usuario: Usuario = {};
  error: boolean = false;
  errorMsj: string = "";


  loginForm: FormGroup = this.fb.group({
    "email": new FormControl(null, Validators.compose([Validators.required, Validators.email])), //valor por defecto null + validaciones
    "password": new FormControl(null, Validators.required)
  })

  ngOnInit(): void {
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  async submitForm() {
    if (this.loginForm.valid) {
      this.usuario.email = this.email?.value;
      this.usuario.password = this.password?.value;

      // aqui no nos podemos suscribir porque en el servicio ya estamos suscritos
      const result = await this.service.login(this.usuario); //llamamos al metodo login del service y le pasamos el usuario. Como es una promesa, devolverá un true o false
      if (result) {
        this.router.navigate(["/home"]);

      } else {
        this.error = true;
        this.errorMsj = "El usuario o contraseña son inválidos";
      }

      //.subscribe(resp => {
      //console.log(resp);
      //this.router.navigate(["/home"]);

      //}, error => {
      //this.error = true;
      //this.errorMsj = error.error;
      // })
    }

  }

  get email() {
    return this.loginForm.get("email");
  }
  get password() {
    return this.loginForm.get("password");
  }

}
