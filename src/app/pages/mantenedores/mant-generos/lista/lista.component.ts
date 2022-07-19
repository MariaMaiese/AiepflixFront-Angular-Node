import { Component, OnInit } from '@angular/core';
import { Genero } from 'src/app/interfaces/interfaces';
import { GenerosService } from 'src/app/services/generos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  constructor(private generoservice: GenerosService) { }
  generos: any[] = [];
  pages: any[] = [];
  page: number = 1;
  totalPages: number = 1;
  sortIcon: string = "bi-sort-up"
  sort: string = 'asc';
  searchText: string = ''


  ngOnInit(): void {
    this.loadGeneros();
  }

  clickPage(page: number) {
    this.page = page;
    this.loadGeneros();
  }

  clickBack() {
    if (this.page > 1) {
      this.page = this.page - 1
      this.loadGeneros();
    }
  }

  clickNext() {
    if (this.page < this.totalPages) {
      this.page = this.page + 1
      this.loadGeneros();
    }
  }
  deleteGenero(genero: any) {
    Swal.fire({
      title: '¿Estas seguro de eliminar el registro?',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#dc3545'

    }).then((result => {
      if (result.isConfirmed) {
        this.generoservice.deleteGenero(genero._id).subscribe((resp: any) => {
          if (resp.ok) {
            this.loadGeneros()
          }
        })
      }
    }))
  }

  loadGeneros() {
    this.generoservice.getGeneros(this.page, this.sort).subscribe((resp: any) => {
      this.generos = resp.generos;
      this.pages = Array.from(Array(resp.totalPages).keys())  //dependiendo del numero del resp, crea un arreglo con las posisiones segun el largo del arreglo
      this.totalPages = resp.totalPages;
    })
  }

  toggleSort() {
    if (this.sort == 'asc') {
      this.sort = 'desc'
      this.sortIcon = "bi-sort-down"
      this.loadGeneros()
    } else {
      this.sort = 'asc'
      this.sortIcon = 'bi-sort-up'
      this.loadGeneros()
    }

  }

  searchGenero() {
    if (this.searchText.length > 2) {
      this.generoservice.searchGenero(this.searchText).subscribe((resp: any) => {
        this.generos = resp.generos
      })
    } else {
      this.loadGeneros()
    }

  }
  clearSearch() {
    this.loadGeneros()
  }
}

