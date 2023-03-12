import { from } from 'rxjs';
import { LayoutComponent } from './layout/layout.component';
import { MainMenuComponent } from './layout/main-menu/main-menu.component';

export const components:any[] = [LayoutComponent,MainMenuComponent];

export * from './layout/layout.component'
export * from './layout/main-menu/main-menu.component'