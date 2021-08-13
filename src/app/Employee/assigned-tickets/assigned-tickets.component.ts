import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
var i=1;
@Component({
  selector: 'app-assigned-tickets',
  templateUrl: './assigned-tickets.component.html',
  styleUrls: ['./assigned-tickets.component.css']
})
export class AssignedTicketsComponent implements OnInit {

  name_search!: string;
 
  Priority_search!: string;
  status_search!: string; 

  searchText: any;
  test=1;
 Tickets = [
    { Id: 4455566, 	Subject: 'asking for permission1', Assigned_Staff_image:'photo', Assigned_Staff_name:'Staff_name 1', Created: '12-2-02-2021', Last_activity: '12-2-02-2021', Priority:'High',Status: 'Open' },
    { Id: 3322000, 	Subject: 'asking for permission1', Assigned_Staff_image:'photo', Assigned_Staff_name:'Staff_name 2', Created: '12-2-02-2021', Last_activity: '12-2-02-2021', Priority:'Low',Status: 'open' },
    
   
  ];

  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {
    
     
    
    }

 

  drp_down2()
  { 
    var w = document.getElementById("drop_down2");
  
  if (i==1){
   
    w!.style.display = "block";
    i=2;
  
  }
  else
  { w!.style.display = "none";
  i=1 ;}
  
  }

 ticket_details()
{
  this.router.navigate(['details'], {relativeTo:this.r}); 
}






}
