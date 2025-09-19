import { Component, inject } from '@angular/core';
import { CustomInput } from '../../../components/custom-input/custom-input';
import { FormGroup, FormControl, AbstractControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { validateCuil, validateDni } from '../../../utils/validations';
import { ToastManager } from '../../../services/toast-manager';
import { ImageUploadComponent, ImageUploadData } from '../../../components/attachments/picture/picture';

@Component({
  selector: 'app-employee-form',
  imports: [CustomInput, ReactiveFormsModule, ImageUploadComponent],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css'
})
export class EmployeeForm {

  toast = inject(ToastManager)

  public registerEmployeeForm = new FormGroup({
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
          }
          else if (control.value.length === 11) {
            return validateCuil(identification);
          } else {
            return { invalidIdentification: true };
          }
          return null;
        }
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
      profile: new FormControl('', [Validators.required])

  })

  hasNotSpaces(){
    return (
      this.registerEmployeeForm.controls.name.value?.trim() == '' ||
      this.registerEmployeeForm.controls.lastName.value?.trim() == '' || 
      this.registerEmployeeForm.controls.identification.value?.trim() == '' ||
      this.registerEmployeeForm.controls.email.value?.trim() == '' ||
      this.registerEmployeeForm.controls.email.value?.trim() == '' || 
      this.registerEmployeeForm.controls.profile.value?.trim() == ''
    )
  }

  notProfiles(){
    return (
      this.registerEmployeeForm.controls.profile.value?.toLowerCase() != 'cocinero' &&
      this.registerEmployeeForm.controls.profile.value?.toLowerCase() != 'mozo' &&
      this.registerEmployeeForm.controls.profile.value?.toLowerCase() != 'bartender' &&
      this.registerEmployeeForm.controls.profile.value?.toLowerCase() != 'meitre' &&
      this.registerEmployeeForm.controls.profile.value?.toLowerCase() != 'supervisor'
    )
  }

  registerEmployee(){
    if (this.hasNotSpaces()) {
      this.toast.show('error', 'Complete todos los campos', 3000)
      return
    }

    if (this.notProfiles()) {
      this.toast.show('error', 'Ingrese un perfil valido', 3000)
      return
    }
    if (this.registerEmployeeForm.controls.identification.errors) {
      this.toast.show('error', 'ERROR, Ingrese una identificacion valida', 3000)
      return
    }

    if (this.registerEmployeeForm.errors) {
      this.toast.show('error', 'Error, verifique bien las credenciales', 3000)
      return
    }

    return this.toast.show('success', 'Empleado cargado con exito', 3000)
  }

  imageData: ImageUploadData | null = null;
  protected onImageDataChange(data: ImageUploadData | null) {
    this.imageData = data;
  }


}
