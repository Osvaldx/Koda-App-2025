import { Component, Input, OnInit } from '@angular/core';
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
  showPassword: boolean = false
  isPassword: boolean = false

  ngOnInit() {
    if (this.type === 'password') {
      this.isPassword = true
    }
  }

  showOrHidePassword(){
    
    if (this.isPassword) {
      if (this.showPassword) {
        this.showPassword = false
        this.type = 'password'
      }else{
        this.showPassword = true
        this.type = 'text'
      }
    }
  }
  
}
