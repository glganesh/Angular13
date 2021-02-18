import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeModel } from 'src/app/models/employee.model';
import { NotificationService } from 'src/app/notification.service';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public _service: EmployeeService, public _dialogRef: MatDialogRef<EmployeeComponent>, public _notification: NotificationService) { }

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
    var odept = new EmployeeModel();
    //odept.postId = this._service.form.value['postId'];
    odept.postId = this._service.form.value['postId'];
    odept.id = this._service.form.value['id'];
    odept.name = this._service.form.value['name'];
    odept.email = this._service.form.value['email'];
    odept.body = this._service.form.value['body'];

    this._service.insupdcomments(odept)
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
