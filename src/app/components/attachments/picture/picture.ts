import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface ImageUploadData {
  imageSrc: string;
  file: File | null;
  fileSource: string | null;
  isValid: boolean;
}

@Component({
  selector: 'app-image-upload',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './picture.html',
})
export class ImageUploadComponent {
  @Input() hideText = false;
  @Output() imageDataChange = new EventEmitter<ImageUploadData | null>();
  imageSrc: string = '';

  myForm = new FormGroup({
    file: new FormControl<File | null>(null, [Validators.required]),
    fileSource: new FormControl<string>('', [Validators.required])
  });

  /*------------------------------------------
  --------------------------------------------
  created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor() { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f() {
    return this.myForm.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.result) {
          this.imageSrc = reader.result.toString();

          // Only update the fileSource control, not the file input
          this.myForm.patchValue({
            fileSource: this.imageSrc
          });

          this.myForm.updateValueAndValidity();

          // Emit the new image data
          this.emitImageData();
        }
      };

      reader.readAsDataURL(file);
    }
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  /**
   * Returns the image data if the form is valid
   * @returns An object containing the image source and file data, or null if invalid
   */
  /**
   * Remove the selected image and reset the form
   */
  /**
   * Get the current image data
   * @returns Object containing image data or null if no image is selected
   */
  private emitImageData() {
    if (this.imageSrc && this.myForm.valid) {
      const imageData: ImageUploadData = {
        imageSrc: this.imageSrc,
        file: this.myForm.value.file || null,
        fileSource: this.myForm.value.fileSource || null,
        isValid: this.myForm.valid
      };
      this.imageDataChange.emit(imageData);
    } else {
      this.imageDataChange.emit(null);
    }
  }

  /**
   * Remove the selected image and reset the form
   */
  removeImage() {
    this.imageSrc = '';
    this.myForm.patchValue({
      file: null,
      fileSource: ''
    });
    this.myForm.get('file')?.reset();
    this.myForm.get('fileSource')?.reset();
    this.myForm.get('file')?.markAsUntouched();
    this.myForm.get('fileSource')?.markAsUntouched();
    this.emitImageData();
  }


}