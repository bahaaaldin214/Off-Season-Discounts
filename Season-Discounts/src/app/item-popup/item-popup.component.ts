import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-popup',
  templateUrl: './item-popup.component.html',
  styleUrls: ['./item-popup.component.css']
})
export class ItemPopupComponent {
  @Input() item: any;
  @Output() itemClick = new EventEmitter<any>();

  currentImage = 0;

  setCurrentImage(index: number) {
    this.currentImage = index;
  }

  prevImage() {
    if (this.currentImage > 0) {
      this.currentImage--;
    } else {
      this.currentImage = this.item.images.length - 1;
    }
  }

  nextImage() {
    if (this.currentImage < this.item.images.length - 1) {
      this.currentImage++;
    } else {
      this.currentImage = 0;
    }
  }


  closePopup() {
    this.itemClick.emit();

    // Trigger a close event (to be handled by the parent component)
  }
}
