// categories.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories = [
    {
      title: 'Fruits & Vegetables',
      items: [
        { name: 'Fresh Vegetables', image: 'assets/images/fresh_vegetables.jpg' },
        { name: 'Fresh Fruits', image: 'assets/images/fresh_fruits.jpg' },
        { name: 'Herbs & Seasonings', image: 'assets/images/herbs_seasonings.jpg' },
      ],
    },
    {
      title: 'Bakery, Cakes & Dairy',
      items: [
        { name: 'Bakery Snacks', image: 'assets/images/bakery_snacks.jpg' },
        { name: 'Breads & Buns', image: 'assets/images/breads_buns.jpg' },
        { name: 'Cakes & Pastries', image: 'assets/images/cakes_pastries.jpg' },
      ],
    },
    {
      title: 'Breakfast, Dips & Spreads',
      items: [
        { name: 'Oats & Muesli', image: 'assets/images/oats_muesli.jpg' },
        { name: 'Tomato Ketchup', image: 'assets/images/tomato_ketchup.jpg' },
        { name: 'Chutney & Powder', image: 'assets/images/chutney_powder.jpg' },
      ],
    },
  ];

  constructor() {}
}