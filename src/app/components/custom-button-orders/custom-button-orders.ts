import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';


type buttonStyle = 'accept' | 'cancel'

@Component({
  selector: 'app-custom-button-orders',
  imports: [NgClass],
  templateUrl: './custom-button-orders.html',
  styleUrl: './custom-button-orders.css'
})
export class CustomButtonOrders {
  @Input() label: string = ''; 
  @Input() type: buttonStyle = 'accept'

  protected styleButton(){
    switch(this.type){
      case 'accept':
        return `bg-green-700 text-white px-2 py-1 rounded-lg active:bg-green-800 transition`;
      case 'cancel':
        return `bg-red-700 text-white px-2 py-1 rounded-lg active:bg-red-900 transition`;
    }
  }
}
