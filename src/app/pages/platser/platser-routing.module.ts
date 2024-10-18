import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatserPage } from './platser.page';

const routes: Routes = [
  {
    path: '',
    component: PlatserPage
  },  {
    path: 'discover',
    loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
  },
  {
    path: 'erbjudanden',
    loadChildren: () => import('./erbjudanden/erbjudanden.module').then( m => m.ErbjudandenPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatserPageRoutingModule {}
