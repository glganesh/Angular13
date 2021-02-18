import { Component, OnInit ,ViewChild} from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NotificationService } from 'src/app/notification.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  grdlistData: MatTableDataSource<any>;
  searchKey = '';


  displayedColumns: string[] = [ 'postId','id', 'name', 'email', 'body','actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _service: EmployeeService, public _notification: NotificationService, public _dialog: MatDialog) {
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
    dialogConfig.width = '40%';
    this._dialog.open(EmployeeService, dialogConfig);
  }

  onEdit(row) {
    this._service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '40%';
    this._dialog.open(EmployeeService, dialogConfig);
    //this._notification.success('updated sucessfully');
  }

  //  onDelete(seqid:number) {
  //  this._service.delcomments(seqid)
  //    .subscribe
  //    (
  //      data => {
  //        this._notification.warn(':: Deleted sucessfully');
  //        this._service.filter('');
  //       // alert('Deleted Successfully');
  //      }//
  //    )//
  //
  //
  // }

}
