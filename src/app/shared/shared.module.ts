import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

//Importing component
import {DarkModeToggleComponent} from "./dark-mode-toggle/dark-mode-toggle.component";




@NgModule({
  declarations: [
    DarkModeToggleComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports:[
    DarkModeToggleComponent
  ]
})
export class SharedModule { }
