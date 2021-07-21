import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePage } from 'src/app/tabs/Profile/profile.page';

// Import Popover page components
import { SettingsPage } from '../pages/settings/settings.page';


const routes: Routes = [
  {
    path: 'settingsPage',
    component: SettingsPage
  },
  {
    path: '**',
    component: ProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PopoverRoutingModule { }
