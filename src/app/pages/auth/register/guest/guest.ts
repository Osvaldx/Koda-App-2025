import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInput } from '../../../../components/custom-input/custom-input';
import { Auth } from '../../../../services/auth';
import { Router } from '@angular/router';
import { ToastManager } from '../../../../services/toast-manager';
import { getFormError } from '../../../../utils/utils';
import {
  ImageUploadComponent,
  ImageUploadData,
} from '../../../../components/attachments/picture/picture';
import { AuthApiError } from '@supabase/supabase-js';

type FormType = {
  name: FormControl<string | null>;
};

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInput, ImageUploadComponent],
  templateUrl: './guest.html',
  styleUrl: './guest.css',
})
export class Guest {
  authService = inject(Auth);
  router = inject(Router);
  toastManager = inject(ToastManager);

  public guestForm: FormGroup<FormType>;

  constructor() {
    this.guestForm = new FormGroup<FormType>({
      name: new FormControl('', [Validators.required]),
    });
  }
  imageData: ImageUploadData | null = null;

  public async register() {
    console.log(this.imageData);
    this.guestForm.disable();
    const { name } = this.guestForm.value;
    if (!name) {
      return this.toastManager.show('error', 'El nombre es requerido', 3000);
    }

    try {
      const { data, error } = await this.authService.anonSignUp({
        name,
        image: this.imageData?.file || null,
      });
      if (error) {
        throw error;
      }
      this.toastManager.show('success', 'Registro exitoso', 3000);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Registration error:', error);

      if (error instanceof AuthApiError) {
        this.toastManager.show('error', 'Error. El usuario ya se encuentra registrado.', 3000);
      } else {
        this.toastManager.show('error', 'Error inesperado. Por favor intenta de nuevo.', 3000);
      }
    } finally {
      this.guestForm.enable();
    }
  }

  public navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }

  protected navigateToGuest() {
    this.router.navigate(['/auth/guest']);
  }

  protected getInputError(controlName: string) {
    return getFormError(this.guestForm, controlName);
  }

  protected onImageDataChange(data: ImageUploadData | null) {
    this.imageData = data;
  }
}
