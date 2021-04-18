import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../superheros';

@Component({
  selector: 'app-templatedrivenforms',
  templateUrl: './templatedrivenforms.component.html',
  styleUrls: ['./templatedrivenforms.component.css']
})
export class TemplatedrivenformsComponent implements OnInit {

  id:number;
  constructor() { }
  ngOnInit(): void {
  this.id=0;
  }

  specialities =['11','2','3','4'];

  weapons =['15','6','7','8'];

  model = new SuperHero(1,'vinoth',this.weapons[0],this.specialities[0],'fighting','Aravindh');

    submitted=false;
  onSubmit(){
    this.submitted=true;
    console.log(this.model.name + 'this.model.name')
    console.log(this.model.weapon +'this.model.weapon')
    console.log(this.model.speciality +'this.model.speciality')

  }

  createnewsuperhero(){
    this.id=this.id+1;
    this.model=new SuperHero(this.id,'','','','','');
  }

}

