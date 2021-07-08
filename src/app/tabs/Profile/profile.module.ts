import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';

import { Tab3PageRoutingModule } from './profile-routing.module';

//Importing shared Module
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ProfilePage }]),
    Tab3PageRoutingModule,
    SharedModule
  ],
  declarations: [ProfilePage]
})
export class Tab3PageModule {}
