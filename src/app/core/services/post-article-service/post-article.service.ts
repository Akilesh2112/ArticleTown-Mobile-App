import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostArticleService {

  constructor(private http: HttpClient) { }

  createPost(postArticle): Observable<unknown> {
    return this.http.post('http://localhost:3000/post', {
      title: postArticle.content,
      description: postArticle.submittedBy,
      article: postArticle.article
  });
  }
}
