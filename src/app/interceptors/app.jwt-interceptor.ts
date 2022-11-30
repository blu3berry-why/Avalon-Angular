import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService){}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = httpRequest.clone({
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Bearer': `Bearer ${this.authService.jwt_token}`
        })
      });
    return next.handle(authReq);
  }
}