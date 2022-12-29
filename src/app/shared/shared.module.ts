import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NgMaterialModule } from './ng-material/ng-material.module';


@NgModule({
  declarations: [],
  imports: [
    NgMaterialModule,
    CommonModule,
    SharedRoutingModule
  ],
  exports: [   
    CommonModule,
    NgMaterialModule,
  ]
})
export class SharedModule { }
