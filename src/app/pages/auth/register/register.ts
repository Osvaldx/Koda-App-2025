import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { CustomInput } from '../../../components/custom-input/custom-input';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';
import { ToastManager } from '../../../services/toast-manager';
import { getFormError } from '../../../utils/utils';
import {
  ImageUploadComponent,
  ImageUploadData,
} from '../../../components/attachments/picture/picture';
import { validateCuil, validateDni } from '../../../utils/validations';
import { AuthApiError } from '@supabase/supabase-js';

type FormType = {
  name: FormControl<string | null>;
  lastName: FormControl<string | null>;
  identification: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
};

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CustomInput, ImageUploadComponent],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  authService = inject(Auth);
  router = inject(Router);
  toastManager = inject(ToastManager);

  public registerForm: FormGroup<FormType>;

  constructor() {
    this.registerForm = new FormGroup<FormType>({
      name: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      identification: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]+$/),
        Validators.minLength(8),
        Validators.maxLength(11),
        (control: AbstractControl) => {
          const identification = control.value;
          if (control.value.length === 8) {
            return validateDni(identification);
          } else if (control.value.length === 11) {
            return validateCuil(identification);
          } else {
            return { invalidIdentification: true };
          }
          return null;
        },
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        (control: AbstractControl) => {
          if (!control.value) {
            return null;
          }
          const emailDomain = control.value?.split('@')[1];
          if (emailDomain.length > 24) {
            return { invalidDomain: true };
          }
          return null;
        },
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [
        Validators.required,
        (control: AbstractControl) => {
          const password = this.registerForm?.get('password')?.value;
          return control.value === password ? null : { passwordsNotMatch: true };
        },
      ]),
    });
  }
  imageData: ImageUploadData | null = null;

  public async register() {
    console.log(this.imageData);
    this.registerForm.disable();
    const { email, password, name, lastName, identification } = this.registerForm.value;
    if (
      email?.trim() === '' ||
      password?.trim() === '' ||
      name?.trim() === '' ||
      lastName?.trim() === '' ||
      identification?.trim() === ''
    ) {
      return this.toastManager.show('error', 'Complete todos los campos', 3000);
    }

    if (!email || !password || !name || !lastName || !identification) {
      return this.toastManager.show('error', 'Todos los campos son requeridos', 3000);
    }

    if (password !== this.registerForm.get('confirmPassword')?.value) {
      return this.toastManager.show('error', 'Las contraseñas no coinciden', 3000);
    }

    try {
      const { data, error } = await this.authService.signUp({
        email,
        password,
        userMetadata: {
          name,
          lastName,
          identification,
          image: this.imageData?.file || null,
        },
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
      this.registerForm.enable();
    }
  }

  public navigateToLogin() {
    this.router.navigate(['/auth/login']);
  }

  protected navigateToGuest() {
    this.router.navigate(['/auth/guest']);
  }

  protected getInputError(controlName: string) {
    return getFormError(this.registerForm, controlName);
  }

  protected onImageDataChange(data: ImageUploadData | null) {
    this.imageData = data;
  }
}
