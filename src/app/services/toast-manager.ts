import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type AlertType = "success" | "error" | "warning" | "info";

export type Toast = {
  type: AlertType,
  message: string,
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ToastManager {

  private toast = new BehaviorSubject<Toast>({
    type: "error",
    message: "",
    visible: false
  });

  public toast$ = this.toast.asObservable();

  public show(type: AlertType, message: string, duration: number) {
    this.toast.next({ type, message, visible: true });
    setTimeout(() => {
      this.hide();
    }, duration);
  }

  public hide() {
    this.toast.next({...this.toast.value, visible: false });
  }

}
