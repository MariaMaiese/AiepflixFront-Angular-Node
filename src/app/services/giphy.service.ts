import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiGifResult, GifLocal, GifResponse } from '../interfaces/interfaces';

const url: string = environment.URL;

@Injectable({
  providedIn: 'root'
})
export class GiphyService {



  constructor(private http: HttpClient) { }
  getDataGifs() {
    return this.http.get<ApiGifResult>('https://g.tenor.com/v1/search?q=&key=JJ3QI6KZOLCK&limit=8')
  }

  searchDataMovie(text: string) {
    return this.http.get<ApiGifResult>(`https://g.tenor.com/v1/search?q=${text}&key=JJ3QI6KZOLCK&limit=8`)
  }

  getDataGifsLocal() {
    return this.http.get<GifResponse>(`${url}/gifs`)
  }
  postGif(gif: GifLocal) {
    return this.http.post(`${url}/gifs`, gif);
  }
}

