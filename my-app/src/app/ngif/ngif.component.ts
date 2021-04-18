import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isValid:boolean = false;
  show:boolean;
  onCreateBlock(){
  this.isValid = true;
  }


  onchange(event:any){
    if( event == '444')
    {
      this.show=true;
    }
    else{
      this.show=undefined;
    }
  }
}
