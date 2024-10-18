import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NyttErbjudandePage } from './nytt-erbjudande.page';

const routes: Routes = [
  {
    path: '',
    component: NyttErbjudandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NyttErbjudandePageRoutingModule {}
