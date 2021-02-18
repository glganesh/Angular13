import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadinglazyComponent } from '../loadinglazy/loadinglazy.component';

const routes: Routes = [
  {path:'',component:LoadinglazyComponent},
  {path:'loadinglazy',component:LoadinglazyComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadinglazyRoutingModule { }
