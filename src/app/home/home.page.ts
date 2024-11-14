import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Define the products array
  products = [
    { name: 'Smart Watch', price: 45, image: 'assets/products/watch.jpg' },
    { name: 'Headphones', price: 30, image: 'assets/products/headphones.jpg' },
    { name: 'Sneakers', price: 55, image: 'assets/products/sneakers.jpg' },
    { name: 'Laptop Stand', price: 25, image: 'assets/products/laptop-stand.jpg' },
    { name: 'Phone Cover', price: 10, image: 'assets/products/phone-cover.jpg' },
    { name: 'Backpack', price: 40, image: 'assets/products/backpack.jpg' },
  ];

  constructor() {}
}
