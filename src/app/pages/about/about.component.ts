import { Component, OnInit } from '@angular/core';
import { Gif, GifLocal } from 'src/app/interfaces/interfaces';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  gifList: GifLocal[] = [];
  textSearch: string = "";
  loading: boolean = false;
  loading_page: boolean = false;

  constructor(private service: GiphyService) { }

  ngOnInit(): void {
    this.loading_page = true;
    setTimeout(() => {
      this.loading_page = false;

      this.service.getDataGifsLocal()
        .subscribe(resp => {
          this.loading = false;
          //this.gifList = resp.
          console.log(resp);
          if (resp.ok) {
            this.gifList = resp.gifs;
          }

        })
    }, 3000);
  }

  onClickSearch() {

    /*
        this.loading = true;
        this.gifList = [];
    
        setTimeout(() => {
          this.service.searchDataMovie(this.textSearch)
            .subscribe(resp => {
              this.loading = false;
              console.log(resp.results)
              if (resp.results) {
                this.gifList = resp.results;
              } else {
                this.gifList = [];
              }
            })
    
        }, 2000);
    
    
      */
  }




}