import { Component, Input } from '@angular/core';
import { ButtonAdd } from '../button-add/button-add';

@Component({
  selector: 'app-product-card',
  imports: [ButtonAdd],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {

  @Input() title!: string
  @Input() description!: string
  @Input() urlImg!: string

}
