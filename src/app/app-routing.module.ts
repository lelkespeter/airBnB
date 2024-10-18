import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'platser',
    loadChildren: () => import('./pages/platser/platser.module').then( m => m.PlatserPageModule)
  },
  {
    path: 'bokningar',
    loadChildren: () => import('./pages/bokningar/bokningar.module').then( m => m.BokningarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
