import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatserPage } from './platser.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlatserPage,
    children: [
      {
        path: 'discover',
        loadChildren: () =>
          import('./discover/discover.module').then(
            (m) => m.DiscoverPageModule
          ),
      },
      {
        path: 'discover/:placeId', // Syskonrutt till 'discover'
        loadChildren: () =>
          import('./discover/platsdetalj/platsdetalj.module').then(
            (m) => m.PlatsdetaljPageModule
          ),
      },
      {
        path: 'erbjudanden',
        loadChildren: () =>
          import('./erbjudanden/erbjudanden.module').then(
            (m) => m.ErbjudandenPageModule
          ),
      },
      {
        path: 'erbjudanden/new', // Syskonrutt till 'offers'
        loadChildren: () =>
          import('./erbjudanden/nytt-erbjudande/nytt-erbjudande.module').then(
            (m) => m.NyttErbjudandePageModule
          ),
      },
      {
        path: 'erbjudanden/edit/:placeId', // Syskonrutt till 'offers'
        loadChildren: () =>
          import('./erbjudanden/edit-erbjudande/edit-erbjudande.module').then(
            (m) => m.EditErbjudandePageModule
          ),
      },
      {
        path: 'erbjudanden/:placeId', // Syskonrutt till 'offers'
        loadChildren: () =>
          import('./erbjudanden/platsbokningar/platsbokningar.module').then(
            (m) => m.PlatsbokningarPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/platser/tabs/discover',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/platser/tabs/discover',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatserPageRoutingModule {}

// const routes: Routes = [
//   {
//     path: '',
//     component: PlatserPage
//   },
//   {
//     path: 'discover',
//     loadChildren: () => import('./discover/discover.module').then( m => m.DiscoverPageModule)
//   },
//   {
//     path: 'erbjudanden',
//     loadChildren: () => import('./erbjudanden/erbjudanden.module').then( m => m.ErbjudandenPageModule)
//   }

// ];
