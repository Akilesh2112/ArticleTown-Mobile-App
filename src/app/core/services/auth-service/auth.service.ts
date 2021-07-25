import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  userAuth(): Observable<unknown> {
    return this.http.get('https://reqres.in/api/login');
  }

  // getMessage(id: string): Observable<Object> {
  //   return this.http.get(`http://localhost:3000/messages/${id}`);
  // }

}
