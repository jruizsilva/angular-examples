import { NgStyle } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './product-detail.component.html',
  styles: ``,
})
export class ProductDetailComponent implements OnInit {
  _route = inject(ActivatedRoute);
  product = '';
  color = '';

  ngOnInit(): void {
    this._route.params.subscribe((params) => {
      this.product = params['productId'];
      this.color = params['category'];
    });
  }
}
