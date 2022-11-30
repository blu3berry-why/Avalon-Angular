import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../model/LoginResponse';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


    constructor(private http: HttpClient) {
    }

    public jwt_token = ''

    public user?: User
      
    login(user: User) {
        return this.http.post<LoginResponse>('/login', user).pipe(map((res : LoginResponse) => {
            this.user = user
            this.jwt_token = res.token
            return res
        }))
            // this is just the HTTP call, 
            // we still need to handle the reception of the token
            //.shareReplay();
    }
/*
    private setSession(authResult) {
      const expiresAt = moment().add(authResult.expiresIn,'second');

      localStorage.setItem('id_token', authResult.idToken);
      localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  logout() {
      localStorage.removeItem("id_token");
      localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
      return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
      return !this.isLoggedIn();
  }

  getExpiration() {
      const expiration = localStorage.getItem("expires_at");
      const expiresAt = JSON.parse(expiration);
      return moment(expiresAt);
  }    */
}
