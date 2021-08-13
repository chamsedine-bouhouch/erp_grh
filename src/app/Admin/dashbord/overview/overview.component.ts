import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  searchText: any;
  test=1;




  Invoices = [
    { id: 4454830, 	Client: ' client name 1', Due_Date: '02/08/2021', Total: '500', Status: 'paid' },
    { id: 4454831, 	Client: ' client name 2', Due_Date: '02/08/2021',Total: '400', Status: 'unpaid' },
    { id: 4454831, 	Client: ' client name 2', Due_Date: '02/08/2021',Total: '400', Status: 'unpaid' }
   
  ];

  leaderbord= [
    { id: 4454830, 	Full_name: 'Employee name 1', Points: '800' },
    { id: 4454831, 	Full_name: 'Employee name 2', Points: '600' },
    { id: 4454831, 	Full_name: 'Employee name 3', Points: '400' },
   
  ];

  Leaves= [
    { Full_name: 'Employee name 1', leave_date: '12-02-2021' , status:"Pending"},
    { Full_name: 'Employee name 2', leave_date: '12-02-2021' , status:"Pending"},
   
  ];

 

  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {
  }
  invoices() {
    this.router.navigate(['../inovices'], {relativeTo:this.r}); }

    Employees()
    {
      this.router.navigate(['../All_employees'], {relativeTo:this.r}); }
}
