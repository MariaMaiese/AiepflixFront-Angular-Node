import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Usuario } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  showPassword: boolean = false;

  constructor(private fb: FormBuilder, private service: UserService, private router: Router) { }
  usuario: Usuario = {};
  error: boolean = false;
  errorMsj: string = "";


  registrarForm: FormGroup = this.fb.group({
    "name": new FormControl(null, Validators.required),
    "email": new FormControl(null, Validators.compose([Validators.required, Validators.email])),
    "password": new FormControl(null, Validators.required),
    "passwordrepeat": new FormControl(null, Validators.compose([Validators.required, RxwebValidators.compare({ fieldName: 'password' })]))
  })

  ngOnInit(): void {
  }

  showHidePassword() {
    this.showPassword = !this.showPassword;
  }

  async submitForm() {
    if (this.registrarForm.valid) {
      this.usuario.name = this.name?.value;
      this.usuario.email = this.email?.value;
      this.usuario.password = this.password?.value;

      const result = await this.service.registrar(this.usuario);
      if (result) {
        this.router.navigate(["/home"]);
      } else {
        this.error = true;
        this.errorMsj = "No se ha podido registrar el usuario"
      }
    }

  }

  passwordMatchValidator(frm: FormGroup) {
    return frm.controls['password'].value === frm.controls['passwordrepeat'].value ? null : { 'mismatch': true };
  }

  get name() {
    return this.registrarForm.get("name");
  }
  get email() {
    return this.registrarForm.get("email");
  }
  get password() {
    return this.registrarForm.get("password");
  }

  get passwordrepeat() {
    return this.registrarForm.get("passwordrepeat");
  }

  pwdMatchValidator() {
    return this.password?.value === this.passwordrepeat?.value
      ? null : { 'mismatch': true };
  }
}
