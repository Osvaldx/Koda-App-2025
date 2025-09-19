import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ImageUploadComponent, ImageUploadData } from '../../../components/attachments/picture/picture';
import { CustomInput } from '../../../components/custom-input/custom-input';
import { ToastManager } from '../../../services/toast-manager';

@Component({
  selector: 'app-form-foods',
  imports: [ReactiveFormsModule, CustomInput, ImageUploadComponent],
  templateUrl: './form-foods.html',
  styleUrl: './form-foods.css'
})
export class FormFoods {
  toast = inject(ToastManager)

  public dishForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        time: new FormControl<number | null>(null, [Validators.required]),
        price: new FormControl<number | null>(null, [Validators.required]),
    })

  imageData: ImageUploadData | null = null
  
  protected onImageDataChange(data: ImageUploadData | null) {
    this.imageData = data;
  }
  
  hasNotSpaces(){
    return (this.dishForm.controls.name.value?.trim() == '' || 
    this.dishForm.controls.description.value?.trim() == '' || 
    this.dishForm.controls.time.value?.toString().trim() == '' || 
    this.dishForm.controls.price.value?.toString().trim() == '' )
  }
  
  registerDish(){
    if (this.hasNotSpaces()) {
      this.toast.show("error", "Complete todos los campos", 3000);
      return
    }
    if (this.imageData === null) {
      this.toast.show("error", "Ponga las imagenes", 3000);
      return
    }

    return this.toast.show('success', 'Plato cargado con exito!', 3000)
  }


}

