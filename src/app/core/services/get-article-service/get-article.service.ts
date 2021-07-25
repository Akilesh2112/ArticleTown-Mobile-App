import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetArticleService {

  constructor(private http: HttpClient) { }

  getArticle(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts'); //http://localhost:3000/get
  }

}
