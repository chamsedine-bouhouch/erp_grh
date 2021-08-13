import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
var i=1;

@Component({
  selector: 'app-overview-employee',
  templateUrl: './overview-employee.component.html',
  styleUrls: ['./overview-employee.component.css']
})
export class OverviewEmployeeComponent implements OnInit {
  Announcement=[{Description: 'You are away today',date: '12-02-2021'}];
  Holiday=[{description:'Ramazan',date: '12-02-2021'}];
  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {
  }
  leaves() {
    this.router.navigate(['../Leaves'], {relativeTo:this.r}); }
}
