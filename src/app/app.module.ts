import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { errorInterceptorProviders } from './core/interceptor/error.interceptor';
import { authInterceptorProviders } from './core/interceptor/auth.interceptor';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
  ],
  providers: [
    authInterceptorProviders,errorInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
