import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiResult, Pelicula } from '../interfaces/interfaces';

const url: string = environment.URL;
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getDataMovies() {
    return this.http.get<ApiResult>('https://www.omdbapi.com/?s=harry&apikey=caf9bc34')
  }

  searchDataMovie(text: string) {
    return this.http.get<ApiResult>(` https://www.omdbapi.com/?s=${text}&apikey=caf9bc34`) //interpolamos la buqueda con la variable del metodo
  }


  postPlicula(pelicula: Pelicula) {
    return this.http.post(`${url}/peliculas`, pelicula);
  }
}
