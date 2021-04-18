import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { DepartmentComponent } from './departments/department/department.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentService } from './services/department.service';
import { NotificationService } from './notification.service';
import { AddUserComponent } from './integration/adduser';
import { EditUserComponent } from './integration/edituser';
import { IntegrationComponent } from './integration/integration.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { Form18Component } from './form18/form18.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ReativeformsComponent } from './reativeforms/reativeforms.component';
import { TemplatedrivenformsComponent } from './templatedrivenforms/templatedrivenforms.component';
import { FreeapiService } from './freeapi.service';
import { CrudjsonplaceholderComponent } from './crudjsonplaceholder/crudjsonplaceholder.component';
import { EmployeeService } from './services/employee.service';
import { ViewuserComponent } from './departments/viewuser/viewuser.component';
import { ProductsComponent } from './lazyloading/products/products.component';
import { OrdersComponent } from './lazyloading/orders/orders.component';
import { LazyComponent } from './lazyloading/lazy/lazy.component';
import { LoadinglazyComponent } from './lazyloading/loadinglazy/loadinglazy.component';
import { Doc2kComponent } from './doc2k/doc2k.component';
import { AngularinfoComponent } from './angularinfo/angularinfo.component';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';


@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    EmployeeComponent,
    EmployeeListComponent,
    DepartmentComponent,
    AddUserComponent,
    EditUserComponent,
    IntegrationComponent,
    UserComponent,
    UsersComponent,
    Form18Component,
  
    NgswitchComponent,
    NgifComponent,
    NgforComponent,
    ReativeformsComponent,
    TemplatedrivenformsComponent,
    CrudjsonplaceholderComponent,
    ViewuserComponent,
    ProductsComponent,
    OrdersComponent,
    LazyComponent,
    
    LoadinglazyComponent,
    
    Doc2kComponent,
    
    AngularinfoComponent,
    
    DashboardComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgMaterialMultilevelMenuModule
  ],
  providers: [DepartmentService, NotificationService,FreeapiService,EmployeeService,],
  bootstrap: [AppComponent],
  entryComponents: [DepartmentComponent,AddUserComponent,EditUserComponent,EmployeeComponent,ViewuserComponent]
})
export class AppModule { }

