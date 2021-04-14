import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class Team4ApiService {
  private url = environment.URL_APITEAM4;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'cache-control': 'no-cache',
    }),
  };

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    var body = `email=${email}&password=${password}`;
    return this.http.post(`${this.url}/Token`, body, this.httpOptions);
  }

  register(data){
    return this.http.post(`${this.url}/User`, data);
  }

  getUser(){
    let id = this.getUserData().user._id;
    return this.http.get(`${this.url}/User/${id}`, this.setHeaders());
  }

  recoverPassword(body){
    return this.http.post(`${this.url}/RecoveryPassword`, body);
  }

  setPassword(id: string, password: string){
    return this.http.put(`${this.url}/RecoveryPassword/${id}`, password);
  }

  logout(){
    localStorage.removeItem('currentToken');
  }
  
  setHeaders(){
    return {
      headers: new HttpHeaders({
        Authorization: JSON.parse(localStorage.getItem('currentToken')).accessToken
      })
    };
  }

  getUserData() {
    let jwtHelper = new JwtHelperService();
    let token = JSON.parse(localStorage.getItem('currentToken'));
    if (token) {
      return jwtHelper.decodeToken(token.accessToken);
    }
    return '';
  }

  isAuth(): boolean {
    if (localStorage.getItem('currentToken')) {
      return true;
    }
    return false;
  }

  IsExpired() {
    let jwtHelper = new JwtHelperService();
    let token = JSON.parse(localStorage.getItem('currentToken'));
    return jwtHelper.isTokenExpired(token.accessToken);
  }
}
