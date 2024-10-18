import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatsbokningarPage } from './platsbokningar.page';

const routes: Routes = [
  {
    path: '',
    component: PlatsbokningarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatsbokningarPageRoutingModule {}
