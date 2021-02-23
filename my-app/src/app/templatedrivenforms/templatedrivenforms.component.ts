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

  weapons =['IRON','ZINC','COPPER','PLATIGUE','URANIUM'];

  specialities =['STRENGTH','FIGHT','COMEDY','CLAIMAX','SCENE']

  styles =['FACE','BODY','SIXPACKS','HAIR','EYES']

  model = new SuperHero(1,'Mahesh',this.weapons[0],this.specialities[0],this.styles[0],'Balu')

  submitted=false;
  onSubmit(){
    this.submitted=true;
    console.log('this.model.name'+this.model.name);
    console.log('this.model.speciality'+this.model.weapon);
    console.log('this.model.speciality'+this.model.speciality);

  }
  addnewsuperhero(){
    this.id=this.id+1
    this.model = new SuperHero(this.id,'','','','','');
  }
}