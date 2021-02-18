import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) {
    
  }


  form: FormGroup = new FormGroup({
    postId : new FormControl('0'),
    id: new FormControl('0'),
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',Validators.required),
    body: new FormControl(''),
   
  })

  initializeFormGroup() {
    this.form.setValue({
      postId: 0,
      id: 0,
      name: '',
      email: '',
      body: '',
    })
  }

  populateForm(getcomments) {
    this.form.setValue(getcomments);
  }

  getcomments(): Observable<any> {
    return this._http.get('https://jsonplaceholder.typicode.com/comments');
  }

  

  insupdcomments(comments: EmployeeModel): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this._http.post('https://jsonplaceholder.typicode.com/comments', comments, httpOptions);
  }

  //delcomments(postId: number): Observable<any> {
    //const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    //return this._http.delete('https://jsonplaceholder.typicode.com/comments/' + comments, httpOptions);
 // }

  
          // Refreshing the data
  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterby: string) {
    this._listners.next(filterby);
  }

}

