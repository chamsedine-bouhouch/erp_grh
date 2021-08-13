import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-generate-slip',
  templateUrl: './generate-slip.component.html',
  styleUrls: ['./generate-slip.component.css']
})
export class GenerateSlipComponent implements OnInit {

  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {
  }

  dashbord() {
    this.router.navigate(['../../overview'], {relativeTo:this.r}); }

   salary() {
      this.router.navigate(['../../payroll'], {relativeTo:this.r}); }
}
