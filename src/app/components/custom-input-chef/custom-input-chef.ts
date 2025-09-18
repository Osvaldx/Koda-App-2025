import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input-chef',
  imports: [ReactiveFormsModule],
  templateUrl: './custom-input-chef.html',
  styleUrl: './custom-input-chef.css'
})
export class CustomInputChef {
  @Input() controller!: FormControl;
  @Input() type?: string;
  @Input() autocomplete?: string;
  @Input() placeholder?: string;
}
