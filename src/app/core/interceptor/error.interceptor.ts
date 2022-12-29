import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AppConstants } from 'src/app/utils/constants';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(this.errorHandler));
  }


  errorHandler(error: HttpErrorResponse) {
    if (error.status === 401) {
      //to login component
      this.toPage('/#')
      return throwError(AppConstants.errorMessages.Unauthorized);
    }
    else if (error.status === 404) {
      //to login component
      this.toPage('/404')
    }

    return throwError(error.error.message);
  }


  toPage(uri: string) {
    this.router.navigateByUrl(uri);
  }

}


export const errorInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
]