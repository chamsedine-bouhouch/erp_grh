import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  Notification=[
    {name_sender:"jhon", prename_sender:"Grauer",notification_about: "  ticket ", Date: '02/08/2021' },
    {name_sender:"jhon", prename_sender:"Grauer",notification_about: "  ticket ", Date: '02/08/2021' },
  ]
  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {
  }

  dashbord() {
    this.router.navigate(['../overview'], {relativeTo:this.r}); }
}
