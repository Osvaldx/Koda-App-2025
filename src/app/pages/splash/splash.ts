import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  imports: [],
  templateUrl: './splash.html',
  styleUrl: './splash.css'
})
export class Splash {

  animationOut: boolean = false;
  router = inject(Router);

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    setTimeout(() => {
      this.animationOut = true;
      this.cdr.detectChanges();
      setTimeout(() => {
        this.sendLogin();
      }, 1000);
    }, 2000);
  }

  public sendLogin() {
    this.router.navigateByUrl("login", { replaceUrl: true });
  }

}
