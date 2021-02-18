import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentService } from 'src/app/services/department.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NotificationService } from 'src/app/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DepartmentComponent } from '../department/department.component';
import{ ViewuserComponent} from '../viewuser/viewuser.component'
@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  grdlistData: MatTableDataSource<any>;
  searchKey = '';


  displayedColumns: string[] = [ 'id', 'name', 'email', 'mobile','address', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _service: DepartmentService, public _notification: NotificationService, public _dialog: MatDialog) {
    //this.grdlistData = new MatTableDataSource;
    //this.sort = new MatSort;
    // listen code below is for refresh the grid list
    this._service.listen().subscribe((m: any) => {
      this.fillGrid();
    });

  }



  ngOnInit(): void {
    this.fillGrid();
  }

  fillGrid() {
    this._service.getcomments()
      .subscribe(
        data => {
          this.grdlistData = new MatTableDataSource(data);
          this.grdlistData.sort = this.sort;
          this.grdlistData.paginator = this.paginator;
        }
      )
  };
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.grdlistData.filter = this.searchKey.trim().toLowerCase();
  };


  onCreate() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '50%';
    this._dialog.open(DepartmentComponent, dialogConfig);
  }

  onEdit(row) {
    this._service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this._dialog.open(DepartmentComponent, dialogConfig);
    //this._notification.success('updated sucessfully');
  }
  onView(users) {
    this._service.populateForm(users);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this._dialog.open(ViewuserComponent, dialogConfig);
    //this._notification.success('updated sucessfully');
  }
  onDelete(seqid:number) {
    this._service.delcomments(seqid)
      .subscribe
      (
        data => {
          this._notification.warn(':: Deleted sucessfully');
          this._service.filter('');
         // alert('Deleted Successfully');
        }

      )


  }

}
