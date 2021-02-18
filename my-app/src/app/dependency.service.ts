import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependencyService {

  constructor() { }
  users:any;

  getusers(){
    return[
      {id:101,name:'varun',gender:'male',salary:2323233,dob:new Date('06/05/1993')},
      {id:102,name:'mahesh',gender:'male',salary:4554545,dob:new Date('01/05/1993')},
      {id:103,name:'pradeep',gender:'male',salary:444444,dob:new Date('02/04/1993')},
      {id:104,name:'sri',gender:'female',salary:78787878,dob:new Date('08/05/1993')},
      {id:105,name:'priya',gender:'female',salary:1212121,dob:new Date('03/01/1993')},
      {id:106,name:'shalini',gender:'female',salary:2323233,dob:new Date('02/08/1992')}
    ]
  }
}
