import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

//Importing routing module
import {PopoverRoutingModule} from './popover-controller/popover-routing.module';

//Importing core module
import { CoreModule } from '../core/core.module';

//Importing the component
import {DarkModeToggleComponent} from './dark-mode-toggle/dark-mode-toggle.component';
import {ViewPostComponent} from './view-post/view-post.component';
import {CreatePostComponent} from './create-post/create-post.component';
import {PopoverControllerComponent} from './popover-controller/popover-controller.component';
import {PopoverDialogueComponent} from './popover-controller/popover-dialogue.component';
import { EditPostComponent } from './edit-post/edit-post.component';

//Importing pages
import { SettingsPage } from './pages/settings/settings.page';


@NgModule({
  declarations: [
    DarkModeToggleComponent,
    ViewPostComponent,
    CreatePostComponent,
    PopoverControllerComponent,
    PopoverDialogueComponent,
    SettingsPage,
    EditPostComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    HttpClientModule,
    CoreModule,                    //Core module
    PopoverRoutingModule,          //Routing module
  ],
  exports: [
    DarkModeToggleComponent,
    ViewPostComponent,
    CreatePostComponent,
    PopoverControllerComponent,
    PopoverDialogueComponent,
    SettingsPage,
    EditPostComponent
  ]
})
export class SharedModule { }
