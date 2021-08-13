import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
var i=1;
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private router: Router, private r:ActivatedRoute,) { }


  Department = [
    {Id:"1",Name:"Marketing" },
    {Id:"2",Name:"Accounts Management" },
   
  ];


  ngOnInit(): void {

    var x = document.getElementById("add_department");
    var d = document.getElementById("delete_department");
    var y = document.getElementById("edit_department");
    
      x!.style.display = "none";
      y!.style.display = "none";
      d!.style.display = "none"
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

  dashbord() {
    this.router.navigate(['../overview'], {relativeTo:this.r}); }

    edit_department()
    { 
      var x = document.getElementById("edit_department");
      var w = document.getElementById("drop_down");
  
  
      
      w!.style.display = "none";
  
      if (x!.style.display == "none") {
        x!.style.display = "block";
      

      }
      } 

    add_department()
    { 
      var x = document.getElementById("add_department");
      var w = document.getElementById("drop_down");
  
  
      
      w!.style.display = "none";
    i=1 ;
  
      if (x!.style.display == "none") {
        x!.style.display = "block";
      

      }
      } 


      hide()
{
  var x = document.getElementById("add_department");
  var d = document.getElementById("delete_department");
  var y = document.getElementById("edit_department");
  
    x!.style.display = "none";
    y!.style.display = "none";
    d!.style.display = "none"

}


delete_department()
{ 
  var d = document.getElementById("delete_department");
  var w = document.getElementById("drop_down");
  
  
  d!.style.display = "block"
  w!.style.display = "none";
i=1 ;

  
}

}
