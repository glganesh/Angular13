import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms'

@Component({
    selector: 'app-adduser',
    templateUrl: './adduser.html',
    styleUrls: ['./adduser.css']
})
export class AddUserComponent implements OnInit {
    adduserData: FormGroup;
    constructor(
        public dialogRef: MatDialogRef<AddUserComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) {
            this.adduserData = new FormGroup({
                "name": new FormControl(''),
                "age":new FormControl(''),
                "address": new FormControl(''),
                "pin":new FormControl('')
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