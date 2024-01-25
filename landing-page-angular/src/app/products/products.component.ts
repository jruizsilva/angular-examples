import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Product {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './products.component.html',
  styles: ``,
})
export class ProductsComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 10,
    },
    {
      id: 2,
      name: 'Product 2',
      price: 20,
    },
    {
      id: 3,
      name: 'Product 3',
      price: 30,
    },
  ];

  selectedProduct: any;
}
