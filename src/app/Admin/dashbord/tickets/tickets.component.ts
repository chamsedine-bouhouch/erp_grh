import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
var i=1;
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
 
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
    
      var x = document.getElementById("add_ticket");
      var d = document.getElementById("delete_ticket");
      var y = document.getElementById("edit_ticket");
      
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
  this.router.navigate(['Ticket_details'], {relativeTo:this.r}); 
}

  add_ticket()
  { 
    var x = document.getElementById("add_ticket");
 

    if (x!.style.display == "none") {
      x!.style.display = "block";
    
    } 


}

hide()
{
  var x = document.getElementById("add_ticket");
  var d = document.getElementById("delete_ticket");
  var y = document.getElementById("edit_ticket");
  
    x!.style.display = "none";
    y!.style.display = "none";
    d!.style.display = "none"

}

delete_ticket()
{ 
  var d = document.getElementById("delete_ticket");
  var w = document.getElementById("drop_down");
  
  
  d!.style.display = "block"
  w!.style.display = "none";
i=1 ;

  
}


edit_ticket()
{ 
  var e = document.getElementById("edit_ticket");
  var w = document.getElementById("drop_down");
  
  
  e!.style.display = "block"
  w!.style.display = "none";
i=1 ;

  
}
}
