// Louvado seja o Senhor

import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { EstoqueComponent } from './pages/estoque/estoque.component';
import { VendasComponent } from './pages/vendas/vendas.component';
import { RegistroDevedoresComponent } from './pages/registro-devedores/registro-devedores.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent, canActivate: [authGuard] },
    { path: "estoque", component: EstoqueComponent, canActivate: [authGuard] },
    { path: "vendas", component: VendasComponent, canActivate: [authGuard] },
    { path: "registroDevedores", component: RegistroDevedoresComponent, canActivate: [authGuard] },
    { path: "", redirectTo: "home", pathMatch: "full" }
];
