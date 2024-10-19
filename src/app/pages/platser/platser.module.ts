import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatserPageRoutingModule } from './platser-routing.module';

import { PlatserPage } from './platser.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PlatserPageRoutingModule],
  declarations: [PlatserPage],
})
export class PlatserPageModule {}
