import { Component, inject } from '@angular/core';
import { ToastManager } from '../../../services/toast-manager';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foods',
  imports: [],
  templateUrl: './foods.html',
  styleUrl: './foods.css'
})
export class Foods {

  toast = inject(ToastManager);
  authService = inject(Auth);
  router = inject(Router);

  public menuOpen: boolean = false;
  public profileOpen: boolean = false;
  public userEmail: string | null = null;

  constructor() {
    this.authService.user$.subscribe((user) => {
      this.userEmail = user?.email ?? null;
    })
  }

  public async sessionClose() {
    this.authService.signOut().then( async(resp) => {
      if(resp.error) {
        this.toast.show("error", "Ocurrio, un error al cerrar sesión", 3000);
        console.log(resp.error);
      } else {
        this.toast.show("success", "Se cerro la sesión correctamente", 3000);
        this.router.navigateByUrl('/auth/login');
      }
    })
  }

  public toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

}
