import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingparamsService {
  id: number;
  constructor(private http: HttpClient) { }


  getusers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/');
  }
  
  getuserbyid(id: number): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
  }
}