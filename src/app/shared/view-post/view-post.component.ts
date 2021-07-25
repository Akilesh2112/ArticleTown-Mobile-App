import { Component, OnInit } from '@angular/core';

//Importing services
import { GetArticleService } from '../../core/services/get-article-service/get-article.service';



@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss'],
})
export class ViewPostComponent implements OnInit {

  article = null;

  constructor(public getArticleService: GetArticleService) { }

  ngOnInit() {
  this.getArticleService.getArticle().subscribe(res => {
    this.article = res;
  });
}

}
