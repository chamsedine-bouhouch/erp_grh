import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './User/login/login.component';
import { ForgetPasswordComponent } from './User/forget-password/forget-password.component';
import { RegisterComponent } from './User/register/register.component';
import { MyticketComponent } from './User/myticket/myticket.component';
import { LandingComponent } from './landing/landing.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DashbordComponent } from './User/dashbord/dashbord.component';
import { SubmitTicketComponent } from './User/submit-ticket/submit-ticket.component';
import { InovicesComponent } from './User/inovices/inovices.component';
import { TicketDetailsComponent } from './User/ticket-details/ticket-details.component';
import { MainContainerComponent } from './Admin/dashbord/main-container/main-container.component';
import { OverviewComponent } from './Admin/dashbord/overview/overview.component';

import { CompanyLoginComponent } from './company-login/company-login.component';
import { LeavesComponent } from './Admin/dashbord/leaves/leaves.component';
import { TicketsComponent } from './Admin/dashbord/tickets/tickets.component';
import { HolidayComponent } from './Admin/dashbord/holiday/holiday.component';
import { CreateInoviceComponent } from './Admin/dashbord/create-inovice/create-inovice.component';
import { InovicesDetailsComponent } from './Admin/dashbord/inovices-details/inovices-details.component';
import { EmployeePayrollComponent } from './Admin/dashbord/employee-payroll/employee-payroll.component';
import { OverviewEmployeeComponent } from './Employee/overview-employee/overview-employee.component';
import { DashbordEmployeeComponent } from './Employee/dashbord-employee/dashbord-employee.component';
import { GenerateSlipComponent } from './Admin/dashbord/generate-slip/generate-slip.component';

import { AdminInovicesComponent } from './Admin/dashbord/admin-inovices/admin-inovices.component';
import { AllEmployeesComponent } from './Admin/dashbord/all-employees/all-employees.component';
import { PayrollComponent } from './Admin/dashbord/payroll/payroll.component';
import { TicketEmployeeComponent } from './Employee/ticket-employee/ticket-employee.component';
import { LeavesEmployeeComponent } from './Employee/leaves-employee/leaves-employee.component';
import { LeavesSettingsComponent } from './Admin/dashbord/leaves-settings/leaves-settings.component';
import { InovicesViewComponent } from './Admin/dashbord/inovices-view/inovices-view.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './Admin/dashbord/department/department.component';
import { DesignationsComponent } from './Admin/dashbord/designations/designations.component';
import { CticketComponent } from './Admin/dashbord/cticket/cticket.component';
import { TicketdetailsComponent } from './Admin/dashbord/ticketdetails/ticketdetails.component';
import { AdminProfileComponent } from './Admin/dashbord/admin-profile/admin-profile.component';
import { AllClientsComponent } from './Admin/dashbord/all-clients/all-clients.component';
import { ActivitiesComponent } from './Admin/dashbord/activities/activities.component';
import { AnnouncementComponent } from './Admin/dashbord/announcement/announcement.component';
import { ThemeComponent } from './Admin/dashbord/theme/theme.component';
import { ProfileComponent } from './Employee/profile/profile.component';
import { NotificationComponent } from './Employee/notification/notification.component';
import { TicketViewComponent } from './Employee/ticket-view/ticket-view.component';

import { WorkingTicketComponent } from './Employee/working-ticket/working-ticket.component';
import { AssignedTicketsComponent } from './Employee/assigned-tickets/assigned-tickets.component';
import { GetQuoteComponent } from './User/get-quote/get-quote.component';
import { InovicesViewEComponent } from './User/inovices-view-e/inovices-view-e.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    RegisterComponent,
    MyticketComponent,
    LandingComponent,
    DashbordComponent,
    SubmitTicketComponent,
    InovicesComponent,
    TicketDetailsComponent,
    MainContainerComponent,
    OverviewComponent,
   
    CompanyLoginComponent,
   
    LeavesComponent,
   
    TicketsComponent,
   
    HolidayComponent,
   
    CreateInoviceComponent,
   
    InovicesDetailsComponent,
   
    EmployeePayrollComponent,
   
    OverviewEmployeeComponent,
   
    DashbordEmployeeComponent,
   
    GenerateSlipComponent,
   
  
   
    AdminInovicesComponent,
   
  
   
    AllEmployeesComponent,
   
  
   
    PayrollComponent,
   
  
   
    TicketEmployeeComponent,
   
  
   
    LeavesEmployeeComponent,
   
  
   
    LeavesSettingsComponent,
   
  
   
    InovicesViewComponent,
   
  
   
    DepartmentComponent,
   
  
   
    DesignationsComponent,
   
  
   
    CticketComponent,
   
  
   
    TicketdetailsComponent,
   
  
   
    AdminProfileComponent,
   
  
   
    AllClientsComponent,
   
  
   
    ActivitiesComponent,
   
  
   
    AnnouncementComponent,
   
  
   
    ThemeComponent,
   
  
   
    ProfileComponent,
   
  
   
    NotificationComponent,
   
  
   
    TicketViewComponent,
   
  
   
   
  
   
    WorkingTicketComponent,
   
  
   
   
  
   
    AssignedTicketsComponent,
   
  
   
   
  
   
    GetQuoteComponent,
   
  
   
   
  
   
    InovicesViewEComponent,
   
  
   
  
   
  
   
  
   
   
   
   


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
   CommonModule
  
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
