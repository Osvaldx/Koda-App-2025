import { Component, inject } from '@angular/core';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  authService = inject(Auth);
  router = inject(Router);

  public async sessionClose() {
    this.authService.signOut().then( async(resp) => {
      if(resp.error) {
        console.log(resp.error);
      } else {
        this.router.navigateByUrl('/auth/login');
      }
    })
  }
}
