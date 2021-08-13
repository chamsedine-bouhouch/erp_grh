import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
var i=1;

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {
  searchedKeyword!: string;
 
  searchedKeyword2!: string;
  searchedKeyword3!: string;
  Employees = [
    {Photo:"photo",name:"jhon",Id: 123, 	Email: 'jhon@gmail.com', Mobile: '25047889', Join_Date: '02/08/2021', Role: 'web designer'  },
  
    {Photo:"photo",name:"paul",Id: 456, 	Email: 'paul@gmail.com', Mobile: '97020233', Join_Date: '02/08/2021', Role: 'web developer' },
    
    {Photo:"photo",name:"paull",Id: 789, 	Email: 'paull@gmail.com', Mobile: '97981212', Join_Date: '02/08/2021', Role: 'web developer' },
  ];

  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {

    var x = document.getElementById("add_employee");
    var d = document.getElementById("delete_employee");
    var y = document.getElementById("edit_employee");
    
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

   edit_employee()
    { 
      var x = document.getElementById("edit_employee");
      var w = document.getElementById("drop_down");
  
  
      
      w!.style.display = "none";
  
      if (x!.style.display == "none") {
        x!.style.display = "block";
      

      }
      } 

    add_employee()
    { 
      var x = document.getElementById("add_employee");
      var w = document.getElementById("drop_down");
  
  
      
      w!.style.display = "none";
    i=1 ;
  
      if (x!.style.display == "none") {
        x!.style.display = "block";
      

      }
      } 


      hide()
{
  var x = document.getElementById("add_employee");
  var d = document.getElementById("delete_employee");
  var y = document.getElementById("edit_employee");
  
    x!.style.display = "none";
    y!.style.display = "none";
    d!.style.display = "none"

}


delete_employee()
{ 
  var d = document.getElementById("delete_employee");
  var w = document.getElementById("drop_down");
  
  
  d!.style.display = "block"
  w!.style.display = "none";
i=1 ;

  
}

}
