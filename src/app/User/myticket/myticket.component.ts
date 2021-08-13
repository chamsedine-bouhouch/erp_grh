import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {AuthService} from '../../shared/auth.service';
import { MyTicketService } from 'src/app/services/my-ticket.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-myticket',
  templateUrl: './myticket.component.html',
  styleUrls: ['./myticket.component.css']
})
export class MyticketComponent implements OnInit {

  searchText: any;
  test=1;
 Tickets = [
    { id: 4454830, 	Subject: 'asking for permission1', Created: '12-2-02-2021', Last_activity: '12-2-02-2021', Status: 'SOLVED' },
  
    { id: 4454832, 	Subject: 'asking for permission3', Created: '12-2-02-2021', Last_activity: '12-2-02-2021', Status: 'SOLVED' },
   
  ];

  constructor( private myservice:MyTicketService, public router: Router,) {
    
    
  }

  on_click(id:any)
    {
   this.myservice.setid(id) 
   this.router.navigate(['ticket_details']);
  console.log("from1",this.test)
    }
  
  ngOnInit(): void {

    
  }

}
