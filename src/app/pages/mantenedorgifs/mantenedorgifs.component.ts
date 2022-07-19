import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-mantenedorgifs',
  templateUrl: './mantenedorgifs.component.html',
  styleUrls: ['./mantenedorgifs.component.css']
})
export class MantenedorgifsComponent implements OnInit {

  constructor(private fb: FormBuilder, private movieService: MoviesService, private router: Router) { }
  nuevaPelicula: Pelicula = {};

  nuevaPeliculaForm: FormGroup = this.fb.group({
    "name": new FormControl(null, Validators.required), //valor por defecto null + validaciones
    "poster": new FormControl(null, Validators.required),
    "year": new FormControl(null, Validators.required)
  })
  ngOnInit(): void {
  }

  get name() {
    return this.nuevaPeliculaForm.get("name");
  }
  get poster() {
    return this.nuevaPeliculaForm.get("poster");
  }
  get year() {
    return this.nuevaPeliculaForm.get("year")
  }


  submitForm() {
    if (this.nuevaPeliculaForm.valid) {
      this.nuevaPelicula.name = this.name?.value;
      this.nuevaPelicula.poster = this.poster?.value;
      this.nuevaPelicula.year = this.year?.value;

      this.movieService.postPlicula(this.nuevaPelicula)
        .subscribe(resp => {
          console.log(resp);
          this.router.navigate(["/home"]);
        })
    }
  }
}
