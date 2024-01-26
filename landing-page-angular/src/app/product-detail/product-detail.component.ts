import { CurrencyPipe, NgIf, NgStyle } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products/products.mock';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgStyle, CurrencyPipe, NgIf],
  templateUrl: './product-detail.component.html',
  styles: ``,
})
export class ProductDetailComponent implements OnInit {
  _route = inject(ActivatedRoute);
  product?: Product;
  products: Product[] = products;
  loading: boolean = false;
  color = '';

  ngOnInit(): void {
    this.loading = true;
    setTimeout(() => {
      this._route.params.subscribe((params) => {
        const productId = parseInt(params['productId']);
        this.product = this.products.find(
          (product) => product.id === productId
        );
        this.loading = false;
        this.color =
          this.product !== undefined && this.product?.price > 25
            ? 'red'
            : 'blue';
      });
    }, 1000);
  }
}
