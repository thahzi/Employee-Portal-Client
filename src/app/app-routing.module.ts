import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { PageNotfoundComponentComponent } from './page-notfound-component/page-notfound-component.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"employee", component:EmployeeComponent},
  {path:"add-employee", component:AddComponent},
  {path:"edit/:id", component:EditComponent},
  {path:"**", component:PageNotfoundComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
