import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiscoverPage } from './discover.page';

const routes: Routes = [
  {
    path: '',
    component: DiscoverPage
  },  {
    path: 'platsdetalj',
    loadChildren: () => import('./platsdetalj/platsdetalj.module').then( m => m.PlatsdetaljPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
