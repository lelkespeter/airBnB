import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NyttErbjudandePageRoutingModule } from './nytt-erbjudande-routing.module';

import { NyttErbjudandePage } from './nytt-erbjudande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NyttErbjudandePageRoutingModule
  ],
  declarations: [NyttErbjudandePage]
})
export class NyttErbjudandePageModule {}
