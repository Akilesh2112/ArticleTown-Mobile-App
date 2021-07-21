import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { Tab2PageRoutingModule } from './home-routing.module';

//Importing shared module & core module
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    CoreModule,             //Import core module
    SharedModule,           //Import shared module
  ],
  declarations: [
    HomePage,
  ]
})
export class Tab2PageModule {}
