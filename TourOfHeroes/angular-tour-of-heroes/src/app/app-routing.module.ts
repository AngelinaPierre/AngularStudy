import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { NameEditorComponent } from './components/name-editor/name-editor.component';
import { ProfileEditorComponent } from './components/profile-editor/profile-editor.component';

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
  {
    path: 'hero-form',
    component: HeroFormComponent,
  },
  {
    path: 'name-editor',
    component: NameEditorComponent,
  },
  {
    path: 'profile-editor',
    component: ProfileEditorComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
