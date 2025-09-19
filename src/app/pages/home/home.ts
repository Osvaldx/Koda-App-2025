import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';
import { ToastManager } from '../../services/toast-manager';
import { CustomButton } from '../../components/custom-button/custom-button';

@Component({
  selector: 'app-home',
  imports: [CustomButton],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

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

  navigateToDrinks(){
    this.router.navigateByUrl('/menu/drinks')
  }

  navigateToFoods(){
    this.router.navigateByUrl('/menu/foods')
  }
}
