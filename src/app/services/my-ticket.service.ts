import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyTicketService {
id :any;
  constructor() { }
  setid(x:any)
  { this.id=x;}

  getid()
  {return  this.id;}
}
