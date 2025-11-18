// Louvado seja o Senhor

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "estoque", component: EstoqueComponent },
    { path: "", redirectTo: "home", pathMatch: "full" }
];
