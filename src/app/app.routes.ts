import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{ HomeComponent } from './components/home/home.component';
import{ AutoComponent } from './components/auto/auto.component';

const APP_ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'auto/:id', component: AutoComponent},
    {path: '',pathMatch:'full',redirectTo: 'home'},
    {path: '**',pathMatch:'full',redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);