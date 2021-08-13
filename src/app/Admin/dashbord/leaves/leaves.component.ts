import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
var i=1;

@Component({
  selector: 'app-leaves',
  templateUrl: './leaves.component.html',
  styleUrls: ['./leaves.component.css']
})
export class LeavesComponent implements OnInit {

  name_search!: string;
 
  type_search!: string;
  status_search!: string;



  Leaves = [
    {Photo:"photo",Name:"jhon",Leave_type: 'Casual Leave', 	From: '02/08/2021', To: '02/09/2021', No_of_Days: '5', 	Reason: 'Going to Hospital', Status: 'Approved' },
    {Photo:"photo",Name:"jhon",Leave_type: 'Medical Leave', 	From: '02/08/2021', To: '02/09/2021', No_of_Days: '5', 	Reason: 'Going to Hospital', Status: 'Rejected' },
    {Photo:"photo",Name:"paul",Leave_type: 'Medical Leave', 	From: '02/08/2021', To: '02/09/2021', No_of_Days: '3', 	Reason: 'Going to Hospital', Status: 'Rejected' },
  ];

  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {
    var x = document.getElementById("add_leave");
    var x2 = document.getElementById("edit_leave"); 
    var x3 = document.getElementById("delete_approve"); 
    var x4 = document.getElementById("approve_leave"); 

    x!.style.display = "none"; 
    x2!.style.display = "none";
    x3!.style.display = "none";
    x4!.style.display = "none";
  
  }

  /********************************************************************************************** */
  delete_leaves()
{ 
var d = document.getElementById("delete_approve");
var w = document.getElementById("drop_down");

d!.style.display = "block"
w!.style.display = "none";
i=1 ;

}

  /********************************************************************************************** */
  approve_leaves()
{ 
var d = document.getElementById("approve_leave");
var w = document.getElementById("drop_down");

d!.style.display = "block"
w!.style.display = "none";
i=1 ;

}

  /********************************************************************************************** */

  reject_leaves()
  { 
    var d = document.getElementById("approve_leave");
    var w = document.getElementById("drop_down");
    
    d!.style.display = "block"
    w!.style.display = "none";
    i=1 ;
    
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

  /********************************************************************************************** */

edit_leaves()
{ 
  var x = document.getElementById("edit_leave");
  var w = document.getElementById("drop_down");

  w!.style.display = "none";

  if (x!.style.display == "none") {
    x!.style.display = "block"; }
  } 
  /********************************************************************************************** */
  add_leave()

  { 
    var x = document.getElementById("add_leave");
    var w = document.getElementById("drop_down");
  
    w!.style.display = "none";
  
    if (x!.style.display == "none") {
      x!.style.display = "block"; }
    } 

   /********************************************************************************************** */
  hide()
  {  
  var x = document.getElementById("add_leave");
  var d = document.getElementById("delete_approve");
  var y = document.getElementById("edit_leave");
  var g = document.getElementById("approve_leave");
    x!.style.display = "none";
    y!.style.display = "none";
    d!.style.display = "none"
    g!.style.display = "none"
  }
  /********************************************************************************************** */




  dashbord() {
    this.router.navigate(['../overview'], {relativeTo:this.r}); }


  /********************************************************************************************** */

 nb_days() {
  var from_date = (<HTMLInputElement>document.getElementById('from_date')).value;

  var to_date = (<HTMLInputElement>document.getElementById('to_date')).value;

  
  
 }



}



 
 









