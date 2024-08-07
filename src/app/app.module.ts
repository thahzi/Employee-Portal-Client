import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { HeaderComponent } from './header/header.component';
import { PageNotfoundComponentComponent } from './page-notfound-component/page-notfound-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeComponent,
    AddComponent,
    EditComponent,
    HeaderComponent,
    PageNotfoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
