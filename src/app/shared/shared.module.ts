import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    NgMaterialModule,
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [   
    CommonModule,
    NgMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
