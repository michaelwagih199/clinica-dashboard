import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminHomeRoutingModule } from './admin-home-routing.module';
import { HomeComponent } from './home/home.component';
import { PatientComponent } from './patient/patient.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    PatientComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminHomeRoutingModule
  ]
})
export class AdminHomeModule { }
