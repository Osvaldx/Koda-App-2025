import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Toast, ToastManager } from '../../services/toast-manager';

@Component({
  selector: 'app-custom-toast',
  imports: [],
  templateUrl: './custom-toast.html',
  styleUrl: './custom-toast.css',
})

export class CustomToast {

  public toast!: Toast;

  toastManager = inject(ToastManager);

  constructor(private cdr: ChangeDetectorRef) {
    this.toastManager.toast$.subscribe((t) => {
      this.toast = t;
      this.cdr.markForCheck();
    });
  }

}
