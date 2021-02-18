import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersModel } from '../models/users.model';
@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private _http: HttpClient) {
    
  }


  form: FormGroup = new FormGroup({
    userseqid : new FormControl('0'),
    id: new FormControl('0'),
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',Validators.required),
    mobile: new FormControl(''),
    address: new FormControl(''),
  })

  initializeFormGroup() {
    this.form.setValue({
      userseqid: 0,
      id: 0,
      name: '',
      email: '',
      mobile: '',
      address: '',
    })
  }

  populateForm(users) {
    this.form.setValue(users);
  }

  getcomments(): Observable<any> {
    //return this._http.get('https://jsonplaceholder.typicode.com/comments');
    return this._http.get('http://localhost:3000/users');

  }

  

  insupdcomments(users: UsersModel): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this._http.post('http://localhost:3000/users', users, httpOptions);
  }

  delcomments(seqid: number): Observable<any> {
    const httpOptions = { headers: new HttpHeaders({ 'content-Type': 'application/json' }) };
    return this._http.delete('http://localhost:3000/users/' + seqid, httpOptions);
  }

  
          // Refreshing the data
  private _listners = new Subject<any>();
  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  filter(filterby: string) {
    this._listners.next(filterby);
  }

}

