import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage {
  categories = [
    { name: 'Electronics', image: 'https://tse4.mm.bing.net/th?id=OIP.BGwhDC-5eqhHHqZkDPDMygHaE7&pid=Api&P=0&h=180', route: '/electronics' },
    { name: 'Fashion', image: 'https://tse4.mm.bing.net/th?id=OIP.BGwhDC-5eqhHHqZkDPDMygHaE7&pid=Api&P=0&h=180', route: '/fashion' },
    { name: 'Beauty', image: 'https://tse4.mm.bing.net/th?id=OIP.BGwhDC-5eqhHHqZkDPDMygHaE7&pid=Api&P=0&h=180', route: '/home-appliances' },
    { name: 'sport', image: 'https://tse4.mm.bing.net/th?id=OIP.BGwhDC-5eqhHHqZkDPDMygHaE7&pid=Api&P=0&h=180', route: '/books' },
    { name: 'food', image: 'https://tse4.mm.bing.net/th?id=OIP.BGwhDC-5eqhHHqZkDPDMygHaE7&pid=Api&P=0&h=180', route: '/toys' },
    // Add more categories as needed
  ];

  constructor(private navCtrl: NavController) {}

  navigateToCategory(route: string) {
    this.navCtrl.navigateForward(route);
  }
}
