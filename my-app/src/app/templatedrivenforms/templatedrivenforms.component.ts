import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../superheros';

@Component({
  selector: 'app-templatedrivenforms',
  templateUrl: './templatedrivenforms.component.html',
  styleUrls: ['./templatedrivenforms.component.css']
})
export class TemplatedrivenformsComponent implements OnInit {

  constructor() { }
  id:number;

  ngOnInit(): void {


    this.id=0;
  }
  weapons=['1','2','3'];

  specialities=['4','5','6'];

  model = new SuperHero(1,'7',this.weapons[0],this.specialities[0],'8');
 
  submitted=false;
  onSubmit(){
    this.submitted=true;
    console.log('this.model.name'+this.model.name);
    console.log('this.model.weapon'+this.model.weapon);
    console.log('this.model.speciality'+this.model.speciality);

  }

  addnewhero(){
    this.id=this.id+1;

    this.model = new SuperHero(this.id,'','','','');
  }
 
}

