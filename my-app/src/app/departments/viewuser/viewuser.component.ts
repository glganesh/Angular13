import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsersModel } from 'src/app/models/users.model';
import { NotificationService } from 'src/app/notification.service';
import { DepartmentService } from 'src/app/services/department.service';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {

  constructor(public _service: DepartmentService, public _dialogRef: MatDialogRef<ViewuserComponent>, public _notification: NotificationService) { }

  ngOnInit(): void {
  }

  onClose() {
    this._service.form.reset();
    this._service.initializeFormGroup();
    this._dialogRef.close();
    this._service.filter('');
  }

  onClear() {
    this._service.form.reset();
    this._service.initializeFormGroup();
  }

  onSubmit() {
    var odept = new UsersModel();
    //odept.postId = this._service.form.value['postId'];
    odept.userseqid = this._service.form.value['userseqid'];
    odept.id = this._service.form.value['id'];
    odept.name = this._service.form.value['name'];
    odept.email = this._service.form.value['email'];
    odept.address = this._service.form.value['address'];
    odept.mobile = this._service.form.value['mobile'];

    this._service.insupdusers(odept)
      .subscribe
      (
        data => {

          this._service.form.reset();
          this._service.initializeFormGroup();
          this._notification.success(":: Submitted Successfully !!");
          this.onClose();
        },
        err => console.log('HTTP Error', err),

      )

      

  }
}
