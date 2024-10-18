import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditErbjudandePage } from './edit-erbjudande.page';

const routes: Routes = [
  {
    path: '',
    component: EditErbjudandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditErbjudandePageRoutingModule {}
