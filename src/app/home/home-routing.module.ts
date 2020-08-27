import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'veterinary-list',
    loadChildren: () => import('../veterinary-list/veterinary-list.module').then(m => m.VeterinaryListPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
