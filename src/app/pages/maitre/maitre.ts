import { Component, inject } from '@angular/core';
import { ToastManager } from '../../services/toast-manager';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { CustomTable } from '../../components/custom-table/custom-table';

@Component({
  selector: 'app-maitre',
  imports: [CustomTable],
  templateUrl: './maitre.html',
  styleUrl: './maitre.css'
})
export class Maitre {

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
