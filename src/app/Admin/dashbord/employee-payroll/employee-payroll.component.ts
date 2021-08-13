import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

var i:number = 1; 
@Component({
  selector: 'app-employee-payroll',
  templateUrl: './employee-payroll.component.html',
  styleUrls: ['./employee-payroll.component.css']
})
export class EmployeePayrollComponent implements OnInit {

  name_filter!: string;
  id_filter!: string;
 role_filter!: string;
  date_filter!: string;
  Employees= [
    {Photo:"photo",name:"jhon",Id: 123, 	Email: 'jhon@gmail.com',Salary: '500', Join_Date: '02/08/2021', Role: 'web designer' },
  
    {Photo:"photo",name:"paul",Id: 456, 	Email: 'paul@gmail.com', Salary: '600', Join_Date: '02/08/2021', Role: 'web developer' },
    
    {Photo:"photo",name:"paull",Id: 789, 	Email: 'paull@gmail.com', Salary: '700', Join_Date: '02/08/2021', Role: 'web developer' },
  ];



  constructor(private router: Router, private r:ActivatedRoute,) { }


  ngOnInit(): void {
    var x = document.getElementById("add_salary");
    x!.style.display = "none";
    var y = document.getElementById("edit_salary");
    y!.style.display = "none";
    var z = document.getElementById("delete_salary");
    z!.style.display = "none";
    var w = document.getElementById("drop_down");
    w!.style.display = "none";
    
  }


  drp_down()
{ 
  var w = document.getElementById("drop_down");

if (i==1){
 
  w!.style.display = "block";
  i=2;

}
else
{ w!.style.display = "none";
i=1 ;}

}
  add_salary()
  { 
    var x = document.getElementById("add_salary");
 

    if (x!.style.display == "none") {
      x!.style.display = "block";
    
    } 


}
edit_salary()
{ 
  var y = document.getElementById("edit_salary");
  var w = document.getElementById("drop_down");
  
  
  y!.style.display = "block"
  w!.style.display = "none";
  i=1 ;

  
}

hide1()
{
  var x = document.getElementById("add_salary");
  var d = document.getElementById("delete_salary");
  var y = document.getElementById("edit_salary");
  
    x!.style.display = "none";
    y!.style.display = "none";
    d!.style.display = "none"

}

delete_salary()
{ 
  var d = document.getElementById("delete_salary");
  var w = document.getElementById("drop_down");
  
  
  d!.style.display = "block"
  w!.style.display = "none";
i=1 ;

  
}
Generate_Slip()
{
  this.router.navigate(['Generate_slip'], {relativeTo:this.r}); 
}

dashbord() {
  this.router.navigate(['../overview'], {relativeTo:this.r}); }
}
