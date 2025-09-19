import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-custom-table',
  imports: [NgClass],
  templateUrl: './custom-table.html',
  styleUrl: './custom-table.css'
})
export class CustomTable {

  @Input() tableNumber!: number;
  @Input() status!: 'disponible' | 'ocupada' | 'reservada';
  @Input() buttonText!: string;

  public color!: 'green' | 'yellow' | 'red';

  ngOnInit() {
    switch (this.status) {
      case 'disponible':
        this.color = 'green';
        break;
      case 'reservada':
        this.color = 'yellow';
        break;
      case 'ocupada':
        this.color = 'red';
        break;
    }
  }

  getContainerClasses(): string {
    const colorMap = {
      green: 'border-green-500',
      yellow: 'border-yellow-500', 
      red: 'border-red-500'
    };
    return `bg-white rounded-xl shadow-md p-6 flex flex-col items-center border-2 w-60 ${colorMap[this.color]}`;
  }

  getCircleClasses(): string {
    const colorMap = {
      green: 'bg-green-100 border-green-500 text-green-700',
      yellow: 'bg-yellow-100 border-yellow-500 text-yellow-700',
      red: 'bg-red-100 border-red-500 text-red-700'
    };
    return `w-24 h-24 flex items-center justify-center rounded-full font-bold text-2xl border-2 ${colorMap[this.color]}`;
  }

  getStatusClasses(): string {
    const colorMap = {
      green: 'text-green-600',
      yellow: 'text-yellow-600',
      red: 'text-red-600'
    };
    return `text-sm mt-1 ${colorMap[this.color]}`;
  }

  getButtonClasses(): string {
    const colorMap = {
      green: 'hover:bg-green-700 bg-green-600',
      yellow: 'hover:bg-yellow-700 bg-yellow-600',
      red: 'hover:bg-red-700 bg-red-600'
    };
    return `mt-4 px-4 py-2 text-white rounded ${colorMap[this.color]}`;
  }
}
