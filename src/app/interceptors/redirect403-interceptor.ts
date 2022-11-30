import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class Redirect403Interceptor implements HttpInterceptor {

    constructor(private authService: AuthService, private router: Router){}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request)
              .pipe(
                    catchError((error: HttpErrorResponse) => {
                        console.log("err")
                       let errorMsg = '';
                       if (error.status == 403){
                        console.log("forbidden")
                            this.router.navigate([""])
                       }
                       console.log(errorMsg);
                       return throwError(errorMsg);
                    })
              )
     }
}