import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClincaResponse } from 'src/app/core/clinica-responce';
import { AppResources } from 'src/app/core/resources-config';
import { environment } from 'src/environments/environment';
import { MenuModel } from '../models/menu-model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private baseUrl = environment.baseUrl + AppResources.resources.resources.home['base-uri'];

  constructor(private httpClient: HttpClient) { }

  getMenuItem(): Observable<ClincaResponse<MenuModel[]>> {
    const url = this.baseUrl + AppResources.resources.resources.home['get-menu-items'];
    return this.httpClient.get<ClincaResponse<MenuModel[]>>(url);
  }


}
