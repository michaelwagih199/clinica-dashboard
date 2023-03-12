import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './components/layout/layout.component';
import { MainMenuComponent } from './components/layout/main-menu/main-menu.component';
import { AboutAppComponent } from './components/layout/dialog/about-app/about-app.component';
import { ConfirmationComponent } from './components/layout/dialog/confirmation/confirmation.component';
import * as fromComponents from './components';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    ...fromComponents.components,
    LayoutComponent,
    MainMenuComponent,
    AboutAppComponent,
    ConfirmationComponent
  ],
  imports: [
    NgMaterialModule,
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [   
    CommonModule,
    NgMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class SharedModule { }
