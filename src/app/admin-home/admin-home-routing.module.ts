import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from '../core/services/auth-gaurd.service';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,canActivate:[AuthGaurdService]
  }
  // {
  //   path:'',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: HomeComponent,canActivate:[AuthGaurdService]
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminHomeRoutingModule { }
