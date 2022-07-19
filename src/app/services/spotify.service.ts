import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  public credentials = {
    clientId: '6ec517cf8efd4a6c9f2f2728b7cd1ad0',
    clientSecret: ' 45b9991250414805a02c69b5b7b77d1f',
    accessToken: ''

  };


  public poolURls = {

    authorize: 'https://accounts.spotify.com/es-ES/authorize?client_id=' + this.credentials.clientId + '&response_typetoken' + 'redirect_uri' + encodeURIComponent('http://localhost:4200/callback') + 'expires_in=3600',
    refreshAccessToken: 'https://accounts.spotify.com/api/token'
  }

  constructor(private http: HttpClient) {
    this.upDateToken()
  }
  upDateToken() {
    this.credentials.accessToken = sessionStorage.getItem('token') || '';
  }

  getQuery(query: string) {
    const URL = `https://api.spotify.com/v1/${query}`;
    const HEADER = { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + this.credentials.accessToken }) }
    return this.http.get(URL, HEADER)
  }

  checkTokenSpoLogin() {

  }
}
