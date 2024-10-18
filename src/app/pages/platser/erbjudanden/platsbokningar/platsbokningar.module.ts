import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatsbokningarPageRoutingModule } from './platsbokningar-routing.module';

import { PlatsbokningarPage } from './platsbokningar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlatsbokningarPageRoutingModule
  ],
  declarations: [PlatsbokningarPage]
})
export class PlatsbokningarPageModule {}
