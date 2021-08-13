import { Component, OnInit } from '@angular/core';
import { MyTicketService } from 'src/app/services/my-ticket.service';
@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {
  id:any ;
 conversations = [
    { name:'Donovan', 	date: '21-02-2020', time: '10:18',  message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', role:'Customer Support' },
    { name:'kazdarr', 	date: '21-02-2020', time: '10:18',  message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry', role:'user' },
   
   
  ];


  constructor(private myservice:MyTicketService) { }

  ngOnInit(): void {

    if(this.myservice.getid()){
      this.id=this.myservice.getid();
      sessionStorage.setItem('id', JSON.stringify(this.id));}
    else{this.id = sessionStorage.getItem('id'); }
    console.log(this.id)
  }

}
