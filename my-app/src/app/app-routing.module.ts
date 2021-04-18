import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularinfoComponent } from './angularinfo/angularinfo.component';
import { CrudjsonplaceholderComponent } from './crudjsonplaceholder/crudjsonplaceholder.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { Doc2kComponent } from './doc2k/doc2k.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { Form18Component } from './form18/form18.component';
import { IntegrationComponent } from './integration/integration.component';
import { LazyComponent } from './lazyloading/lazy/lazy.component';
import { OrdersComponent } from './lazyloading/orders/orders.component';
import { ProductsComponent } from './lazyloading/products/products.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { ReativeformsComponent } from './reativeforms/reativeforms.component';
import { TemplatedrivenformsComponent } from './templatedrivenforms/templatedrivenforms.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [

  {path:'',component:Doc2kComponent },
  {path:'dashboard', component: DashboardComponent },
  {path:'employee', component: EmployeeComponent },
  {path:'user/:id',component:UserComponent},
  {path:'users',component:UsersComponent},
  {path:'employeelist', component: EmployeeListComponent },
  {path:'departmentlist', component: DepartmentListComponent },
  {path:'integration',component: IntegrationComponent},
  {path:'form18',component:Form18Component},
  {path:'reactiveforms',component:ReativeformsComponent},
  {path:'templatedrivenforms',component:TemplatedrivenformsComponent},
  {path:'ngfor',component:NgforComponent},
  {path:'ngif',component:NgifComponent},
  {path:'ngswitch',component:NgswitchComponent},
  {path:'crudjsonplaceholder',component:CrudjsonplaceholderComponent},
  {path:'lazy',component:LazyComponent},
  {path:'products',component:ProductsComponent},
  {path:'orders',component:OrdersComponent},
  {path:'angularinfo',component:AngularinfoComponent},
  ///This code is for LAZY LOADING  CONCEPT
  {path:'loadinglazy',
     loadChildren:() => import('./lazyloading/loadinglazy/loadinglazy.module').then(m=>m.LoadinglazyModule)},
  
  //{path:'**',redirectTo:'users'}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }


