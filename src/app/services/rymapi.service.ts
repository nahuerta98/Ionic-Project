import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RYMApiService {
  private url = environment.URL_APITEAM4;

  constructor(private http: HttpClient) { }

  getData(page: number){
    return this.http.get<data>(`${this.url}/character/?page=${page}`, this.setHeaders());
  }

  getCharacter(id: string){
    return this.http.get<character>(`${this.url}/character/${id}`, this.setHeaders());
  }

  getEpisode(urlEpisode: string){
    return this.http.get<episode>(`${urlEpisode}`);
  }

  getEpisodeDetails(id: string){
    return this.http.get<episode>(`https://rickandmortyapi.com/api/episode/${id}`);
  }

  setHeaders(){
    return {
      headers: new HttpHeaders({
        Authorization: JSON.parse(localStorage.getItem('currentToken')).accessToken
      })
    };
  }
}
