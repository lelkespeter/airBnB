import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatsdetaljPage } from './platsdetalj.page';

const routes: Routes = [
  {
    path: '',
    component: PlatsdetaljPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatsdetaljPageRoutingModule {}
