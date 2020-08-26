import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VeterinaryListPage } from './veterinary-list.page';

const routes: Routes = [
  {
    path: '',
    component: VeterinaryListPage
  },
  {
    path: 'veterinary',
    loadChildren: () => import('./veterinary/veterinary.module').then( m => m.VeterinaryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VeterinaryListPageRoutingModule {}
