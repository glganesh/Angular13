import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-reativeforms',
  templateUrl: './reativeforms.component.html',
  styleUrls: ['./reativeforms.component.css']
})
export class ReativeformsComponent implements OnInit {

  constructor( public fb:FormBuilder) { }

  ngOnInit(): void {
  }
            userprofileform = this.fb.group({
              firstname:['',[Validators.required,Validators.minLength(6),Validators.pattern("[a-zA-Z]{8}")]],
              lastname:[''],
              email:['',Validators.email],
              dob:[''],
            address:this.fb.group({
              address1:['',[Validators.required,Validators.minLength(6),Validators.pattern("[a-zA-Z]{8}")]],
              address2:[''],
              zipcode:[''],
              state:[''],
              country:[''],
            }),

            mobiles:this.fb.array([
              this.fb.control('')

            ])
            })

            counter:number;

            onSubmit(){
              console.log(this.userprofileform.value);
              this.counter=0;
              for(let mob of this.mobiles.controls)
              {
                console.log("mobile"+(this.counter+1)+"::"+this.userprofileform.get(['mobiles',this.counter]).value);
                this.counter=this.counter+1;
              }
              //console.log(this.userprofileform.value);
              //console.log(this.userprofileform.get(['address,'address1]).value);
              //console.log(this.userprofileform.get('address').get('address2').value);
            }

            updateform(){
              this.userprofileform.patchValue({
                firstname:'ganesh',
                lastname:'gl',
                email:'glg@.com',
                dob:'23-01-1995',
              address:{
                address1:'123',
                address2:'456',
                zipcode:'789',
                state:'teleangana',
                country:'india'
                }
              })
            }

           addnewmobilenumber(){
             return this.mobiles.push(this.fb.control(''));
           }

           get mobiles(){
             return this.userprofileform.get('mobiles') as FormArray;
           }

            get firstname(){
              return this.userprofileform.get('firstname');
            }

            get email(){
              return this.userprofileform.get('email');
            }

            get address1(){
              return this.userprofileform.get('address').get('address1')
            }
}

