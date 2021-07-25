import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PostArticleService } from '../../core/services/post-article-service/post-article.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss'],
})
export class CreatePostComponent implements OnInit {

  constructor(
    public alertController: AlertController,
    public postFullArticle: PostArticleService
    ) { }
  ngOnInit() {}
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'post-article-service',
      header: 'New Article',
      inputs: [
        //Title
        {
          name: 'Title',
          type: 'text',
          placeholder: 'Title'
        },
        //Discription
        {
          name: 'Discription',
          type: 'text',
          id: 'articleDiscriptionn',
          placeholder: 'Discription'
        },
        //Main article
        {
          name: 'Article',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Ent ur Art'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'cancel-button',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Post',
          role: 'post',
          cssClass: 'post-button',
          //Handling Post request
          handler: (alertData) => {
            const allDataOfArticle = {
              title: alertData.Title,
              description: alertData.Discription,
              article: alertData.Article
            };

            this.postFullArticle.createPost(allDataOfArticle).subscribe((res) => {
              console.log(res);
            });
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
