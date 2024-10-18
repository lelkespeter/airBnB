import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditErbjudandePageRoutingModule } from './edit-erbjudande-routing.module';

import { EditErbjudandePage } from './edit-erbjudande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditErbjudandePageRoutingModule
  ],
  declarations: [EditErbjudandePage]
})
export class EditErbjudandePageModule {}
