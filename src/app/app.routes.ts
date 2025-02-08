import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { MySalesComponent } from './my-sales/my-sales.component';

export const routes: Routes = [
  { path: 'foryou', component: MainContentComponent },
  { path: "favorite", component: FavoriteComponent },
  { path: "mysales", component: MySalesComponent }
];
