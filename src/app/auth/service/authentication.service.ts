import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AppResources } from '../../core/resources-config';
import { LoginResponse } from '../models/login-resbonse';
import { ClincaResponse } from 'src/app/core/clinica-responce';
import { Observable, throwError } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

export class User {
  constructor(public status: string) { }
}

export class JwtResponse {
  constructor(public jwttoken: string) { }
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  baseUrl = environment.baseUrl + '/auth';

  constructor(private httpClient: HttpClient) { }

  authenticate(username: any, password: any){
    return this.httpClient.post<ClincaResponse<LoginResponse>>(this.baseUrl + AppResources.resources.resources.auth['login-uri'], { username, password },)
      .pipe(
        map(userData => {                    
          if (userData.data.token != null) {
            // sessionStorage.setItem('username', JSON.stringify(userName));
            sessionStorage.setItem('username', username);
            let tokenStr = userData.data.token;
            sessionStorage.setItem('token', tokenStr);
          }
        }))
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    //console.log(!(user === null))
    return !(user === null);
  }
}
