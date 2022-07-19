import { Component, OnInit } from '@angular/core';
import { Gif } from 'src/app/interfaces/interfaces';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  gifList: Gif[] = [];
  textSearch: string = "";
  loading: boolean = false;
  loading_page: boolean = false;

  constructor(private service: GiphyService) { }

  ngOnInit(): void {
    this.loading_page = true;
    setTimeout(() => {
      this.loading_page = false;

      this.service.getDataGifs()
        .subscribe(resp => {
          this.loading = false;
          this.gifList = resp.results
        })
    }, 3000);




  }
  onClickSearch() {
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


  }



}