import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent }      from './app.heroes.component';
import { DashBoardComponent }   from './app.dashboard.component';
import { HeroDetailComponent }  from './app.hero-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashBoardComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
