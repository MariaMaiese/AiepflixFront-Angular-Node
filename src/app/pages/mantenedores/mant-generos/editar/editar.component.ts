import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Genero } from 'src/app/interfaces/interfaces';
import { GenerosService } from 'src/app/services/generos.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: GenerosService, private router: Router, private route: ActivatedRoute) { }

  nuevoGenero: Genero = {}
  generoId: string = '';
  generoEdit: Genero = {};

  updategeneroForm: FormGroup = this.fb.group({
    "name": new FormControl(null, Validators.required)
  })

  ngOnInit(): void {
    this.generoId = String(this.route.snapshot.paramMap.get('id'));
    this.service.getGeneroById(this.generoId).subscribe((resp: any) => {
      this.generoEdit = resp.generoDb
      this.updategeneroForm.patchValue({
        name: this.generoEdit.name
      })
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
          if (resp.ok) {
            console.log(resp);
            this.router.navigate(["/mantenedor-generos"]);
          }
        })
    }
  }

}
