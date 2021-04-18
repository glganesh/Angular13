import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddUserComponent } from './adduser';
import { EditUserComponent } from './edituser';
// import { saveAs } from 'file-saver/FileSaver/'
@Component({
  selector: 'app-integration',
  templateUrl: './integration.component.html',
  styleUrls: ['./integration.component.css']
})
export class IntegrationComponent implements OnInit {

  constructor(public dialog: MatDialog) {}
  exportDataAsCSV:any;
  users:any;
  addData:any;
  ngOnInit(): void {
    this.users=[
      {name:'ganesh',age:'3333',address:'41',pin:'11'},
      {name:'loki',age:'3333',address:'41',pin:'11'},
      {name:'uday',age:'3333',address:'41',pin:'11'},
    ]

  }
deletevalue(inidex:any){
  for(var i=0;i<this.users.length;i++){
    if(this.users[i].name === inidex.name){
      this.users.splice(i,1)
    }
  }
}
addvalue():void{
  const dialogRef = this.dialog.open(AddUserComponent, {
    width: '100% ',
    height:'500px',
    data:''
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result != ''){
      this.addData = result.data;
      console.log('added user details',this.addData);
      this.users.push(this.addData)
    }
    
  });
}
Update(user:any){
  const dialogRef = this.dialog.open(EditUserComponent, {
    width: '100% ',
    height:'500px',
    data:user
  });

  dialogRef.afterClosed().subscribe(result => {
    if(result != ''){
      this.addData = result.data;
      console.log('added user details',this.addData);
      for(var i=0;i<this.users.length;i++){
        if(this.users[i].name === result.data.name){
          this.users[i] = result.data
        }
      }
    }
    
  });
}
Export(){
  let exportData: Array<Object> = [];
  for(var res of this.users){
    exportData.push({
      "name":res.name===null||  res.name === undefined  ? "":res.name ,
      "age":res.age===null||  res.age === undefined  ? "":res.age ,
      "address":res.address===null||  res.address === undefined  ? "":res.address ,
      "pin": res.pin===null||  res.pin === undefined  ? "":res.pin 
    }); 
    
  }

  this.exportDataAsCSV = exportData;
  const replacer = (key:any, value:any) => (value === null ? '' : value); // specify how you want to handle null values here
  const header = Object.keys(exportData[0]);
  const csv = exportData.map((row:any) =>
    header
      .map((fieldName) => JSON.stringify(row[fieldName], replacer))
      .join(',')
  );
  csv.unshift(header.join(','));
  const csvArray = csv.join('\r\n');

  const a = document.createElement('a');
  const blob = new Blob([csvArray], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);

  a.href = url;
  a.download = 'myFile.csv';
  a.click();
  window.URL.revokeObjectURL(url);
  a.remove();
  }
}
