import { CommonModule, NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

type buttonStyle = 'primary' | 'secondary' | 'tertiary'

@Component({
  selector: 'app-custom-button',
  imports: [NgClass, CommonModule],
  templateUrl: './custom-button.html',
  styleUrl: './custom-button.css'
})

export class CustomButton {
  @Input() label: string = ''; 
  @Input() type: buttonStyle = 'primary'
  @Input() disabled: boolean = false;
  @Input() customStyle?: string = '';

  protected styleButton(){
    const styles = (this.customStyle === '') ? 'w-80 p-2' : this.customStyle;
    switch(this.type){
      case 'primary':
        return `bg-red-500 text-white rounded-2xl ${styles} cursor-pointer`;
      case 'secondary':
        return `bg-white text-red-500 border border-red-500 rounded-2xl ${styles} hover:bg-red-50 transition cursor-pointer`;
      case 'tertiary':
        return `bg-transparent text-red-500 rounded-2xl ${styles} hover:bg-red-100 transition cursor-pointer`;
    }
  }
}
