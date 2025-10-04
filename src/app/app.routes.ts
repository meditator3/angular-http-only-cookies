import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [
    { path: ':orgName', component: App },
    { path: '**', redirectTo: '/' }
];