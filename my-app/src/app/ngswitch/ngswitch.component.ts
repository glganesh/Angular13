import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  templateUrl: './ngswitch.component.html',
  styleUrls: ['./ngswitch.component.css']
})
export class NgswitchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selecteditem:any;
  myFun(val){
    this.selecteditem=val.target.value;
}
msg:string;
hello(){
this.msg="sdfgdsfg"
this.selecteditem=false;
}
}