import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/interfaces/interfaces';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-actualizargenero',
  templateUrl: './actualizargenero.component.html',
  styleUrls: ['./actualizargenero.component.css']
})
export class ActualizargeneroComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: GenerosService, private router: Router, private route: ActivatedRoute) { }

  nuevoGenero: Genero = {}
  generoId: string = '';
  updategeneroForm: FormGroup = this.fb.group({

    "name": new FormControl(null, Validators.required)
  })

  ngOnInit(): void {
    this.route.queryParams.subscribe((resp: any) => {

      this.service.getGeneroById(resp.id).subscribe((resp: any) => {
        if (resp.ok) {
          this.nuevoGenero = resp.generoDb
          this.updategeneroForm.get('name')?.setValue(this.nuevoGenero.name)
          console.log(resp);
        }
      })
      console.log(resp.id);
    })
  }

  get name() {
    return this.updategeneroForm.get("name");
  }
  submitForm() {
    if (this.updategeneroForm.valid) {
      this.nuevoGenero.name = this.name?.value

      this.service.updateGenero(this.generoId, this.nuevoGenero)
        .subscribe((resp: any) => {
          //if (resp.ok) {
          console.log(resp);
          this.router.navigate(["/mantenedorgeneros"]);
          //}
        })
    }
  }
}
