import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BokningarPageRoutingModule } from './bokningar-routing.module';

import { BokningarPage } from './bokningar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BokningarPageRoutingModule
  ],
  declarations: [BokningarPage]
})
export class BokningarPageModule {}
