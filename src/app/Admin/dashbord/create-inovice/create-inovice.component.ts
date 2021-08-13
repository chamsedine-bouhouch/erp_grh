import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-create-inovice',
  templateUrl: './create-inovice.component.html',
  styleUrls: ['./create-inovice.component.css']
})
export class CreateInoviceComponent implements OnInit {

  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {
  }
  dashbord() {
    this.router.navigate(['../../overview'], {relativeTo:this.r}); }

    Invoice() {
      this.router.navigate(['../../inovices'], {relativeTo:this.r}); }
}
