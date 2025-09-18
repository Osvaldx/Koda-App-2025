import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: "", redirectTo: "splash", pathMatch: "full" },
    {
        path: "auth",
        children: [
            { path: "login", loadComponent: () => import('./pages/auth/login/login').then(m => m.Login) },
            { path: "register", loadComponent: () => import('./pages/auth/register/register').then(m => m.Register) }
        ]
    },
    { path: "home", loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: "splash", loadComponent: () => import('./pages/splash/splash').then(m => m.Splash) },
    {
        path: "menu",
        children: [
            { path: "foods", loadComponent: () => import('./pages/menu/foods/foods').then(m => m.Foods) },
            { path: "drinks", loadComponent: () => import('./pages/menu/drinks/drinks').then(m => m.Drinks) }
        ]
    },
    {path: "waiterscreen", loadComponent: () => import('./pages/waiter-screen/waiter-screen').then(m => m.WaiterScreen)}
];
