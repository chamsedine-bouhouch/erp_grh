import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './Admin/dashbord/activities/activities.component';
import { AdminInovicesComponent } from './Admin/dashbord/admin-inovices/admin-inovices.component';
import { AdminProfileComponent } from './Admin/dashbord/admin-profile/admin-profile.component';
import { AllClientsComponent } from './Admin/dashbord/all-clients/all-clients.component';
import { AllEmployeesComponent } from './Admin/dashbord/all-employees/all-employees.component';
import { AnnouncementComponent } from './Admin/dashbord/announcement/announcement.component';

import { CreateInoviceComponent } from './Admin/dashbord/create-inovice/create-inovice.component';
import { CticketComponent } from './Admin/dashbord/cticket/cticket.component';
import { DepartmentComponent } from './Admin/dashbord/department/department.component';
import { DesignationsComponent } from './Admin/dashbord/designations/designations.component';
import { EmployeePayrollComponent } from './Admin/dashbord/employee-payroll/employee-payroll.component';
import { GenerateSlipComponent } from './Admin/dashbord/generate-slip/generate-slip.component';
import { HolidayComponent } from './Admin/dashbord/holiday/holiday.component';
import { InovicesDetailsComponent } from './Admin/dashbord/inovices-details/inovices-details.component';
import { InovicesViewComponent } from './Admin/dashbord/inovices-view/inovices-view.component';
import { LeavesSettingsComponent } from './Admin/dashbord/leaves-settings/leaves-settings.component';
import { LeavesComponent } from './Admin/dashbord/leaves/leaves.component';
import { MainContainerComponent } from './Admin/dashbord/main-container/main-container.component';
import { OverviewComponent } from './Admin/dashbord/overview/overview.component';
import { PayrollComponent } from './Admin/dashbord/payroll/payroll.component';
import { ThemeComponent } from './Admin/dashbord/theme/theme.component';
import { TicketdetailsComponent } from './Admin/dashbord/ticketdetails/ticketdetails.component';
import { TicketsComponent } from './Admin/dashbord/tickets/tickets.component';
import { CompanyLoginComponent } from './company-login/company-login.component';
import { AssignedTicketsComponent } from './Employee/assigned-tickets/assigned-tickets.component';
import { DashbordEmployeeComponent } from './Employee/dashbord-employee/dashbord-employee.component';
import { LeavesEmployeeComponent } from './Employee/leaves-employee/leaves-employee.component';
import { NotificationComponent } from './Employee/notification/notification.component';
import { OverviewEmployeeComponent } from './Employee/overview-employee/overview-employee.component';
import { ProfileComponent } from './Employee/profile/profile.component';
import { TicketEmployeeComponent } from './Employee/ticket-employee/ticket-employee.component';
import { WorkingTicketComponent } from './Employee/working-ticket/working-ticket.component';
import { LandingComponent } from './landing/landing.component';
import { DashbordComponent } from './User/dashbord/dashbord.component';
import { ForgetPasswordComponent } from './User/forget-password/forget-password.component';
import { GetQuoteComponent } from './User/get-quote/get-quote.component';
import { InovicesViewEComponent } from './User/inovices-view-e/inovices-view-e.component';
import { InovicesComponent } from './User/inovices/inovices.component';
import { LoginComponent } from './User/login/login.component';
import { MyticketComponent } from './User/myticket/myticket.component';

import { RegisterComponent } from './User/register/register.component';
import { SubmitTicketComponent } from './User/submit-ticket/submit-ticket.component';
import { TicketDetailsComponent } from './User/ticket-details/ticket-details.component';



const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  {path:'landing', component:LandingComponent},





/* ********************************************************** USER  *********************************************************/

  {path:'login', component:LoginComponent},
  {path:'logout', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'Forgot_Password', component:ForgetPasswordComponent},

  {path:'ddashbord', component:DashbordComponent}, 
  {path:'ticket_details', component:TicketDetailsComponent}, 
  {path:'submit_ticket', component:SubmitTicketComponent},
  {path:'ticket', component:MyticketComponent}, 
  {path:'inovices', component:InovicesComponent}, 
  {path:'inovices_view', component:InovicesViewEComponent}, 
  {path:'Get_quote', component:GetQuoteComponent}, 

  
  
  


/* ******************************************************* Admin  ********************************************************/

{path:'company_login', component:CompanyLoginComponent}, 

 {path:'admin/dashbord',
 component:MainContainerComponent ,
 /* canActivate: [AdminGuard]*/
  children:[
    {path:'overview', component:OverviewComponent}, 
    {path:'Profile', component:AdminProfileComponent}, 

    {path:'Departments', component:DepartmentComponent}, 
    {path:'Designations', component:DesignationsComponent}, 

    {path:'Tickets', component:CticketComponent, children:[
    {path:'', component:TicketsComponent}, 
    {path:'Ticket_details', component:TicketdetailsComponent}, ]},  

    {path:'payroll', component:PayrollComponent,  children:[
    {path:'', component:EmployeePayrollComponent}, 
    {path:'Generate_slip', component:GenerateSlipComponent}, ]},


    {path:'Theme', component:ThemeComponent}, 
    {path:'holiday', component:HolidayComponent}, 
    {path:'All_Clients', component:AllClientsComponent}, 
    {path:'Notification', component:ActivitiesComponent}, 
    
    {path:'Announcement', component:AnnouncementComponent}, 


    {path:'inovices', component:AdminInovicesComponent,  children:[
   {path:'', component:InovicesDetailsComponent}, 
    {path:'create-inovice', component:CreateInoviceComponent},
    {path:'Inovice_view', component:InovicesViewComponent},
  ]}, 

    
    
    {path:'leaves', component:LeavesComponent}, 
    {path:'All_employees', component:AllEmployeesComponent}, 
    {path:'Leaves_settings', component:LeavesSettingsComponent},
      ]
  }, 






/* ****************************************************** Employees  ********************************************************/



 {path:'Employee/Dashbord',
 component:DashbordEmployeeComponent ,
 /* canActivate: [AdminGuard]*/
  children:[
    {path:'Overview', component:OverviewEmployeeComponent}, 
    {path:'Tickets', component:TicketEmployeeComponent , children:[
      {path:'', component:AssignedTicketsComponent}, 
      {path:'details', component:WorkingTicketComponent},
    ]}, 
    {path:'Leaves', component:LeavesEmployeeComponent}, 
    {path:'Profile', component:ProfileComponent}, 
    {path:'Notification', component:NotificationComponent}, 
  ]},







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


