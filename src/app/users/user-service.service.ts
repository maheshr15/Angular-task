import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  Users: Users;
  constructor(private http: HttpClient) { }

  getDataApi (): Observable<any> {
    return this.http.get('http://localhost:3000/posts');
  }
  
  getDatabyId(id:number): Observable<any> {
    return this.http.get('http://localhost:3000/posts/' + id );
  }
}
