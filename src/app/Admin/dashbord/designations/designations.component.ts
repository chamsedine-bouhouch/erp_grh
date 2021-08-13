import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { DepartmentComponent } from '../department/department.component';
var i=1;
@Component({
  selector: 'app-designations',
  templateUrl: './designations.component.html',
  styleUrls: ['./designations.component.css']
})
export class DesignationsComponent implements OnInit {

  constructor(private router: Router, private r:ActivatedRoute,) { }


  Designation = [
    {Id:"1",Name:"Product Manager",Department:"Marketing"},
    {Id:"2",Name:"Accounts Management" ,Department:"Marketing" },
   
  ]; 
  ngOnInit(): void {

    var x = document.getElementById("add_designation");
    var d = document.getElementById("delete_designation");
    var y = document.getElementById("edit_designation");
    
      x!.style.display = "none";
      y!.style.display = "none";
      d!.style.display = "none"
  }
  dashbord() {
    this.router.navigate(['../overview'], {relativeTo:this.r}); }

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


  edit_designation()
  { 
    var x = document.getElementById("edit_designation");
    var w = document.getElementById("drop_down");


    
    w!.style.display = "none";

    if (x!.style.display == "none") {
      x!.style.display = "block";
    

    }
    } 

  add_designation()
  { 
    var x = document.getElementById("add_designation");
    var w = document.getElementById("drop_down");


    
    w!.style.display = "none";
  i=1 ;

    if (x!.style.display == "none") {
      x!.style.display = "block";
    

    }
    } 


    hide()
{
var x = document.getElementById("add_designation");
var d = document.getElementById("delete_designation");
var y = document.getElementById("edit_designation");

  x!.style.display = "none";
  y!.style.display = "none";
  d!.style.display = "none"

}


delete_designation()
{ 
var d = document.getElementById("delete_designation");
var w = document.getElementById("drop_down");


d!.style.display = "block"
w!.style.display = "none";
i=1 ;


}
}
