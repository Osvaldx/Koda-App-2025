import { Component, inject } from '@angular/core';
import { ToastManager } from '../../services/toast-manager';

@Component({
  selector: 'app-button-add',
  imports: [],
  templateUrl: './button-add.html',
  styleUrl: './button-add.css'
})
export class ButtonAdd {

  toast = inject(ToastManager)
  quantity: number = 0;

  public add() {
    this.quantity++;
  }

  public remove() {
    if(this.quantity > 0) {
      this.quantity--;
    } else {
      this.toast.show("error", "No puede se le puede restar a 0", 3000)
    }
  }

}
