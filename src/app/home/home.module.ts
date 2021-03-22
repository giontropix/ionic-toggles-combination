import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ItemComponent } from './item/item.component';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  declarations: [HomePage, ItemComponent, HomePageComponent],
  exports: [HomePageComponent],
})
export class HomePageModule {}
