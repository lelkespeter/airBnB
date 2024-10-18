import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ErbjudandenPage } from './erbjudanden.page';

const routes: Routes = [
  {
    path: '',
    component: ErbjudandenPage
  },  {
    path: 'nytt-erbjudande',
    loadChildren: () => import('./nytt-erbjudande/nytt-erbjudande.module').then( m => m.NyttErbjudandePageModule)
  },
  {
    path: 'edit-erbjudande',
    loadChildren: () => import('./edit-erbjudande/edit-erbjudande.module').then( m => m.EditErbjudandePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErbjudandenPageRoutingModule {}
