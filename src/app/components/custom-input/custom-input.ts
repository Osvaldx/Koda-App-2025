import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  imports: [ReactiveFormsModule],
  templateUrl: './custom-input.html',
  styleUrl: './custom-input.css'
})
export class CustomInput {
  
  @Input() controller!: FormControl;
  @Input() type?: string;
  @Input() autocomplete?: string;
  @Input() placeholder?: string;
  
}
