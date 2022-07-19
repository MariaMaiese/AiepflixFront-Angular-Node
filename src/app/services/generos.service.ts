import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Genero, GeneroResponse } from '../interfaces/interfaces';

const url = environment.URL
@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private http: HttpClient) { }

  getGeneros(page: number, sort: string) {
    return this.http.get<GeneroResponse>(`${url}/generos?page=${page}&sort=${sort}`);
  }

  guardarGenero(genero: Genero) {
    return this.http.post(`${url}/generos`, genero)
  }

  getGeneroById(id: string) {
    return this.http.get(`${url}/generos/byid/${id}`,)
  }

  updateGenero(id: string, genero: Genero) {
    return this.http.put(`${url}/generos/${id}`, genero)
  }

  deleteGenero(id: string) {
    return this.http.delete(`${url}/generos?id=${id}`)
  }

  searchGenero(searchText: string) {
    return this.http.get(`${url}/generos/search?searchText=${searchText}`)
  }
}
