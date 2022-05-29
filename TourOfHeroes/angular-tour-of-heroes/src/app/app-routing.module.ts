import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail/hero-detail.component';

const routes: Routes = [
  {
    path:'', // default root
    redirectTo:'/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes', // route to heroes
    component: HeroesComponent,
  },
  {
    path: 'dashboard', // route to dashboard
    component: DashboardComponent,
  },
  // route with parameterized route
  {
    path:'detail/:id',
    component: HeroDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
