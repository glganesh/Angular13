import { Component, OnInit } from '@angular/core';
import { FreeapiService } from '../freeapi.service';
import { Comments } from '../classes/comments'
import { Posts } from '../classes/posts'


@Component({
  selector: 'app-crudjsonplaceholder',
  templateUrl: './crudjsonplaceholder.component.html',
  styleUrls: ['./crudjsonplaceholder.component.css']
})
export class CrudjsonplaceholderComponent implements OnInit {

  constructor(private _FreeapiService:FreeapiService) { }

  lstcomments:Comments[];
  objposts:Posts;
  objputs:Posts;
  objpatch:Posts;
  message:string;

  ngOnInit(): void {

    this._FreeapiService.getcomments()
    .subscribe
    (
      data =>
      {
        this.lstcomments = data;
      }
    );
    
    
    var opost = new Posts();
  opost.title='abc';
  opost.body='efg'
  opost.userId=3;

  this._FreeapiService.post(opost)
  .subscribe
  (
    data =>
    {
      this.objposts = data;
    }
  )

   var opost  = new Posts();
   opost.title='ganesh';
   opost.body='glg';
   opost.userId=1;
   opost.id=1;

   this._FreeapiService.put(opost)
   .subscribe
   (
     data =>
     {
      this.objputs = data;
     }
   )
  
   var opost = new Posts();
   opost.title ='using the latest technique';


   this._FreeapiService.patch(opost)
   .subscribe
   (
     data =>
     {
       this.objpatch = data;
     }
   )

   this._FreeapiService.delete()
   .subscribe
   (
     data =>
     {
       this.message='Resource deleted successfully';
     }
   )
  }
}

  