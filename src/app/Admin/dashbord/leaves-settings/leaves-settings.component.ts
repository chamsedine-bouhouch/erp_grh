import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
var i=1;

@Component({
  selector: 'app-leaves-settings',
  templateUrl: './leaves-settings.component.html',
  styleUrls: ['./leaves-settings.component.css']
})
export class LeavesSettingsComponent implements OnInit {

  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {
  }

  dashbord() {
    this.router.navigate(['../overview'], {relativeTo:this.r}); }
}
