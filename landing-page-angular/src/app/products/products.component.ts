import { CurrencyPipe, NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { products } from './products.mock';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, NgFor, CurrencyPipe, NgClass],
  templateUrl: './products.component.html',
  styles: ``,
})
export class ProductsComponent {
  products: Product[] = products;

  selectedProduct: any;
}
