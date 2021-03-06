import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'page',
    component: TabsPage,
    children: [
      {
        path: 'Home',
        loadChildren: () => import('./Home/home.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'Profile',
        loadChildren: () => import('./Profile/profile.module').then(m => m.Tab3PageModule)
      },
      {
        path: '',
        redirectTo: '/page/Home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/page/Home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
