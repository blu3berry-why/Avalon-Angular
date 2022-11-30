import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class UsernameInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService){}

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = httpRequest.clone({
        headers: new HttpHeaders({
          'Avalon-Header-Logged-In-User-Username':  this.authService.user?.username ?? ""
        })
      });
    return next.handle(authReq);
  }
}
