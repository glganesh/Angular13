import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
    selector: 'app-edituser',
    templateUrl: './edituser.html',
})
export class EditUserComponent implements OnInit {
    adduserData: FormGroup;
    constructor(
        public dialogRef: MatDialogRef<EditUserComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            this.adduserData = new FormGroup({
                "name": new FormControl(data.name),
                "age":new FormControl(data.age),
                "address": new FormControl(data.address),
                "pin":new FormControl(data.pin)
            })
         }
    users: any;
    ngOnInit() {

    }
    addUser(){
        console.log(this.adduserData.value)
        this.dialogRef.close({data:this.adduserData.value});
    }
    onNoClick(){
        this.dialogRef.close({data:''})
    }
}
