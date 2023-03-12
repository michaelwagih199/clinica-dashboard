import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClincaResponse } from 'src/app/core/clinica-responce';
import { TokenStorageService } from 'src/app/core/services/token-storage.service';
import { MenuService } from 'src/app/shared/service/menu.service';
import { MenuModel } from '../../../models/menu-model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  menuItems!: ClincaResponse<MenuModel[]>;
  menuItemsList = new Array<MenuModel>();
  userName: any;

  constructor(private menuService: MenuService, private router: Router,
    private takenServive: TokenStorageService,) { }

  ngOnInit(): void {
    this.getMenuItems();
    this.userName = sessionStorage.getItem('username')?.toString();
  }

  /**
   * data
   */

  getMenuItems() {
    this.menuService.getMenuItem().subscribe(response => {
      console.log(response);
      if (response.code == 'OK')
        this.menuItemsList = response.data;
    })
  }

  logoutComfirm() {
    this.logout();
  }

  logout() {
    this.takenServive.signOut();
    this.redirectTo('/');
  }

  redirectTo(uri: string) {
    this.router
      .navigateByUrl('/', { skipLocationChange: true })
      .then(() => this.router.navigate([uri]));
  }
}
