import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import {Posts } from '../classes/posts';
import { Posts } from './posts'

@Injectable({
  providedIn: 'root'
})
export class FreeapiService {

  constructor( private httpclient:HttpClient) { }


  getcomments():Observable<any>
  {
    return this.httpclient.get('https://jsonplaceholder.typicode.com/comments?postId=1');
  }

  post(opost:Posts):Observable<any>
  {
    return this.httpclient.post('https://jsonplaceholder.typicode.com/posts',opost);
  }

  put(opost:Posts):Observable<any>
  {
    return this.httpclient.put('https://jsonplaceholder.typicode.com/posts/1',opost);
  }

  patch(opost:Posts):Observable<any>
  {
    return this.httpclient.patch('https://jsonplaceholder.typicode.com/posts/1',opost);
  }

  delete():Observable<any>
  {
    return this.httpclient.delete('https://jsonplaceholder.typicode.com/posts/1');
  }
}
