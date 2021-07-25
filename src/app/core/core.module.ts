import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

//Importing shared module
//import { SharedModule } from '../shared/shared.module';

//Importing the components
import { AuthenticationComponent } from './authentication/authentication.component';



//Importing the services
import { AuthService } from './services/auth-service/auth.service';
import { PostArticleService } from './services/post-article-service/post-article.service';
import { GetArticleService } from './services/get-article-service/get-article.service';

//Importing pipes
import { TruncatePipe } from './pipes/truncate.pipe';


@NgModule({
  declarations: [
    AuthenticationComponent,
    TruncatePipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    IonicModule,
    //SharedModule,
  ],
  exports: [
    AuthenticationComponent,
    TruncatePipe
  ],
  providers: [
    AuthService,
    PostArticleService,
    GetArticleService,
  ]
})
export class CoreModule { }
