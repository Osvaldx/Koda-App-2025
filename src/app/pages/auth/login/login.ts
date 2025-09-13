import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInput } from '../../../components/custom-input/custom-input';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';
import { ToastManager } from '../../../services/toast-manager';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CustomInput],
  templateUrl: './login.html',
  styleUrl: './login.css'
})

export class Login {

  authService = inject(Auth);
  router = inject(Router);
  toastManager = inject(ToastManager);

  public loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor(private cdr: ChangeDetectorRef) { }

  public async login() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;
    
    if(email?.trim() === "" || password?.trim() === "") { return this.toastManager.show("error", "Complete todos los campos", 3000) }

    const { error } = await this.authService.signIn(email!, password!);

    if(error) {
      switch(error.code) {
        case "invalid_credentials":
          this.toastManager.show("error", "Credenciales Invalidas", 3000);
          break;
        case "user_not_found":
          this.toastManager.show("error", "No existe un usuario con ese correo", 3000);
          break;
        default:
          this.toastManager.show("error", "Algo ocurrio! Intente más tarde", 3000);
          break;
      }
      return
    }

    this.toastManager.show("success", "Inicio de Sesion exitoso!", 3000);
    this.router.navigateByUrl('home', { replaceUrl: true });
  }

  accessDirect(index: number){
    const cuenta = environment.cuentaRapida[index];
    this.loginForm.patchValue({
      email: cuenta.email,
      password: cuenta.password
    })
  }

  navigateToRegister(){
    this.router.navigateByUrl('register', {replaceUrl: true})
  }

}
