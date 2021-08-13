import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
var i=1;
@Component({
  selector: 'app-all-clients',
  templateUrl: './all-clients.component.html',
  styleUrls: ['./all-clients.component.css']
})
export class AllClientsComponent implements OnInit {

  searchedKeyword!: string;
 
  searchedKeyword2!: string;
  searchedKeyword3!: string;
  Client = [
    {Photo:"photo",name:"jhon",Id: 123, 	Email: 'jhon@gmail.com', Mobile: '25047889' },
  ];

  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {
 
  var x = document.getElementById("add_client");
  var d = document.getElementById("delete_client");
  var y = document.getElementById("edit_client");
  
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

 edit_Client()
  { 
    var x = document.getElementById("edit_client");
    var w = document.getElementById("drop_down");


    
    w!.style.display = "none";

    if (x!.style.display == "none") {
      x!.style.display = "block";
    

    }
    } 

  add_Client()
  { 
    var x = document.getElementById("add_client");
    var w = document.getElementById("drop_down");


    
    w!.style.display = "none";
  i=1 ;

    if (x!.style.display == "none") {
      x!.style.display = "block";
    

    }
    } 


    hide()
{
var x = document.getElementById("add_client");
var d = document.getElementById("delete_client");
var y = document.getElementById("edit_client");

  x!.style.display = "none";
  y!.style.display = "none";
  d!.style.display = "none"

}


delete_Client()
{ 
var d = document.getElementById("delete_client");
var w = document.getElementById("drop_down");


d!.style.display = "block"
w!.style.display = "none";
i=1 ;


}

}
