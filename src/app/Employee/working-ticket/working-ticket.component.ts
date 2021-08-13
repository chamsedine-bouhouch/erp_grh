import { Component, OnInit } from '@angular/core';
var i=1;
@Component({
  selector: 'app-working-ticket',
  templateUrl: './working-ticket.component.html',
  styleUrls: ['./working-ticket.component.css']
})
export class WorkingTicketComponent implements OnInit {

  Ticket = [
    {Client_name:"jhon", 	Issue: 'Laptop Issue', Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sollicitudin libero vitae est consectetur, a molestie tortor consectetur. Aenean tincidunt interdum ipsum, id pellentesque diam suscipit ut. Vivamus massa mi, fermentum eget neque eget, imperdiet tristique lectus. Proin at purus ut sem pellentesque tempor sit amet ut lectus. Sed orci augue, placerat et pretium ac, hendrerit in felis. Integer scelerisque libero non metus commodo, et hendrerit diam aliquet. Proin tincidunt porttitor ligula, a tincidunt orci pellentesque nec. Ut ultricies maximus nulla id consequat. Fusce eu consequat mi, eu euismod ligula. Aliquam porttitor neque id massa porttitor, a pretium velit vehicula. Morbi volutpat tincidunt urna, vel ullamcorper ligula fermentum at.',
     created: '02/08/2021', status: 'Open', file:'file.doc',Assigned_to:'employee' ,Priority:' High' },
  
  ];

  chat = [{  user_name:"jhon_employee", time: '8:30am',msg:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.'}
  ,{  user_name:"paul_client", time: '8:30am',msg:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel elit neque.'}
  ,{  user_name:"jhon_employee", time: '8:30am',msg:'closed this ticket.'}
];
followers= [{ Name:"jhon_employee",} ];
  constructor() { }

  ngOnInit(): void {
  }

  drp_down()
  { 
    var w = document.getElementById("drop_down");
    
  if (i==1){
    
  
    w!.style.display = "block";
    i=2;
  
  }
  else
  { 
    w!.style.display = "none";
  
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
  { 
    w!.style.display = "none";
  
  i=1 ;}
  
  }

  
  Download()
  {}
  Share()
  {}
  delete_file()
  {}
  Edit_ticket()
  {}
  Delete_ticket()
  {}

  }
