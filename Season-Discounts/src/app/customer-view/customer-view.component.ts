import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent {
  @Input() items: any;
  selectedItem: any = null;

  onItemClicked(item: any) {
    this.selectedItem = item;
  }

  closePopup() {
    this.selectedItem = null;

  }

}
