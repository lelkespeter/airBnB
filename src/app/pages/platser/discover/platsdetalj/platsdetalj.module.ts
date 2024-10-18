import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatsdetaljPageRoutingModule } from './platsdetalj-routing.module';

import { PlatsdetaljPage } from './platsdetalj.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlatsdetaljPageRoutingModule
  ],
  declarations: [PlatsdetaljPage]
})
export class PlatsdetaljPageModule {}
