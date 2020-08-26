import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VeterinaryListPageRoutingModule } from './veterinary-list-routing.module';

import { VeterinaryListPage } from './veterinary-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VeterinaryListPageRoutingModule
  ],
  declarations: [VeterinaryListPage]
})
export class VeterinaryListPageModule {}
