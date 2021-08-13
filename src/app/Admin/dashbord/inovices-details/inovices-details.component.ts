import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

var i=1;
@Component({
  selector: 'app-inovices-details',
  templateUrl: './inovices-details.component.html',
  styleUrls: ['./inovices-details.component.css']
})
export class InovicesDetailsComponent implements OnInit {

 
 Inovices = [
    {Invoice_Number:"0000001",Client:"jhon_tech",Created: '12-02-2022', Due: '12-03-222', Status: 'Pending',Amount:'$500' },
  
  ];
  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {
    var d = document.getElementById("delete_inovices");
  
  
 
    d!.style.display = "none"
  }

  hide1()
{

  var d = document.getElementById("delete_inovices");
  
  
 
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

  delete_inovices()
{ 
  var d = document.getElementById("delete_inovices");
  var w = document.getElementById("drop_down");
  
  
  d!.style.display = "block"
  w!.style.display = "none";
i=1 ;

  
}

Create_Invoice()
{
  this.router.navigate(['create-inovice'], {relativeTo:this.r}); }


view_Invoice()
{
  this.router.navigate(['Inovice_view'], {relativeTo:this.r}); }
}

