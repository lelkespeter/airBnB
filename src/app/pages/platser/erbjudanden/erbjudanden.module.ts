import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErbjudandenPageRoutingModule } from './erbjudanden-routing.module';

import { ErbjudandenPage } from './erbjudanden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErbjudandenPageRoutingModule
  ],
  declarations: [ErbjudandenPage]
})
export class ErbjudandenPageModule {}
