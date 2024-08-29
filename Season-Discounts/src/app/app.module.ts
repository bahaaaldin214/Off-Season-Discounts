import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { ItemPopupComponent } from './item-popup/item-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerViewComponent,
    AdminViewComponent,
    ItemPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule{}
