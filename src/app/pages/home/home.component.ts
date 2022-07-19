import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movieList: Movie[] = [];
  textSearch: string = ""; //bindeo de ambas direcciones con una variable del html
  loading: boolean = false;
  loading_page: boolean = false;
  constructor(private service: MoviesService) { }

  ngOnInit(): void {
    this.loading_page = true;
    setTimeout(() => {
      this.loading_page = false;

      this.service.getDataMovies()
        .subscribe(resp => {
          this.loading = false;
          console.log(resp.Search)
          this.movieList = resp.Search
        })


    }, 3000);



  }

  onClickSearch() {
    this.loading = true; //se esta empezando a ejecutar la accion
    this.movieList = [];
    //console.log('click:' + this.textSearch)

    setTimeout(() => {
      this.service.searchDataMovie(this.textSearch)
        .subscribe(resp => {
          this.loading = false; //aqui ya obtenemos la respuesta, por lo tanto ya no estaria cargando
          console.log(resp.Search);
          if (resp.Search) {
            this.movieList = resp.Search;
          } else {
            this.movieList = [];
          }
        })
    }, 2000);

  }

}
