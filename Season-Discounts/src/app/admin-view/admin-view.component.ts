import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent {
  items = [
    { name: 'Shoe', price: 29.99, image: 'assets/shoe.jpg' },
    { name: 'Shirt', price: 19.99, image: 'assets/shirt.jpg' },
    { name: 'Pants', price: 39.99, image: 'assets/pants.jpg' }
  ];

  newItem = { name: '', price: 0, image: '' };

  addItem() {
    if (this.newItem.name && this.newItem.price && this.newItem.image) {
      this.items.push({ ...this.newItem });
      this.newItem = { name: '', price: 0, image: '' };
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }
}
