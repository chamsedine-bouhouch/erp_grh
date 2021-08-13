import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-payroll',
  templateUrl: './payroll.component.html',
  styleUrls: ['./payroll.component.css']
})
export class PayrollComponent implements OnInit {

  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {
    this.router.navigate(['all'], {relativeTo:this.r});
  }

}
