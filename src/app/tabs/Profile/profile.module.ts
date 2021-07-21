import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfilePage } from './profile.page';

import { Tab3PageRoutingModule } from './profile-routing.module';

//Importing popout routing module
import { PopoverRoutingModule } from '../../shared/popover-controller/popover-routing.module';

//Importing shared Module & core module
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: ProfilePage}]),
        Tab3PageRoutingModule,
        SharedModule,           //Import shared module
        CoreModule,             //Import core module
        PopoverRoutingModule
    ],
  declarations: [ProfilePage]
})
export class Tab3PageModule {}
