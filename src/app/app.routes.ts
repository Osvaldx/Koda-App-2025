import { Routes } from '@angular/router';
import { Login } from './pages/auth/login/login';
import { Home } from './pages/home/home';
import { Splash } from './pages/splash/splash';
import { Register } from './pages/auth/register/register';

export const routes: Routes = [
    { path: "", redirectTo: "splash", pathMatch: "full" },
    { path: "login", component: Login },
    { path: "home", component: Home },
    { path: "splash", component: Splash },
    { path: "register", component: Register }
];
