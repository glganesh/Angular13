import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators }  from '@angular/forms'


@Component({
  selector: 'app-reativeforms',
  templateUrl: './reativeforms.component.html',
  styleUrls: ['./reativeforms.component.css']
})
export class ReativeformsComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  userprofileForm = this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(4),Validators.pattern('[A-Za-z]{8}')]],
    lastName:[''],
    age:[''],
    Telephone:[''],
    address: this.fb.group({
      address1:['',[Validators.required,Validators.email]],
      address2:[''],
      zip:[''],
      permanentaddress3:[''],
    }),
   mobiles:this.fb.array([
     this.fb.control('')
   ])
  });
  
counter:number;
  onSubmit(){
    this.counter=0;
    for(let mob of this.mobiles.controls)
    {
      console.log('Mobile'+(this.counter+1)+'::'+this.userprofileForm.get(['mobiles', this.counter]).value);
      this.counter=this.counter+1;
    }
  }
   
  updatetheform(){
  
    this.userprofileForm.patchValue({
      firstName:('glg'),
      lastName:('gl'),
      age:(23),
      Telephone:(9100160034),
      address:{
        address1:('kothur'),
        address2:('paradarami'),
        zip:(632603),
        email:('glgansh@0011')

      }
    })
  }

  get mobiles(){
    return this.userprofileForm.get('mobiles')as FormArray;
  }

  addnewmobile(){

    this.mobiles.push(this.fb.control(''));
  }

  get firstName(){
    return this.userprofileForm.get('firstName');
  }

  get address1(){
    return this.userprofileForm.get('address').get('address1');
  }
}


