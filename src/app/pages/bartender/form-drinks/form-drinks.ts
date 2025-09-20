import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImageUploadComponent, ImageUploadData } from '../../../components/attachments/picture/picture';
import { CustomInput } from '../../../components/custom-input/custom-input';
import { ToastManager } from '../../../services/toast-manager';

@Component({
  selector: 'app-form-drinks',
  imports: [ReactiveFormsModule, CustomInput, ImageUploadComponent],
  templateUrl: './form-drinks.html',
  styleUrl: './form-drinks.css'
})
export class FormDrinks {
  toast = inject(ToastManager)

  public drinkForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    time: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
    price: new FormControl<number | null>(null, [Validators.required, Validators.min(1)]),
  })

  images: (ImageUploadData | null)[] = [null, null, null]

  protected onImageDataChange(data: ImageUploadData | null, index: number) {
    this.images[index] = data
  }

  private hasEmptyFields() {
    return (
      this.drinkForm.controls.name.value?.trim() === '' ||
      this.drinkForm.controls.description.value?.trim() === '' ||
      this.drinkForm.controls.time.value === null ||
      this.drinkForm.controls.price.value === null
    )
  }

  private imagesIncomplete() {
    return this.images.some(img => img === null)
  }

  registerDrink() {
    if (this.hasEmptyFields()) {
      this.toast.show("error", "Complete todos los campos", 3000);
      return
    }
    if (this.imagesIncomplete()) {
      this.toast.show("error", "Debe cargar las 3 imágenes", 3000);
      return
    }

    return this.toast.show('success', 'Bebida cargada con éxito!', 3000)
  }
}
