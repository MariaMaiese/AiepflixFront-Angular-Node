import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/interfaces/interfaces';
import { GenerosService } from 'src/app/services/generos.service';


@Component({
  selector: 'app-mant-generos',
  templateUrl: './mant-generos.component.html',
  styleUrls: ['./mant-generos.component.css']
})
export class MantGenerosComponent implements OnInit {

  constructor(private service: GenerosService) { }

  generos: Genero[] = []

  ngOnInit(): void {

    this.getGeneros();
  }

  deleteGenero(genero: any) {
    this.service.deleteGenero(genero._id).subscribe((resp: any) => {
      if (resp.ok) {
        this.getGeneros();
      }
    })
  }

  getGeneros() {
    this.service.getGeneros(1, 'asc').subscribe(resp => {
      if (resp.ok) {
        this.generos = resp.generos;
      }
    })
  }

}
