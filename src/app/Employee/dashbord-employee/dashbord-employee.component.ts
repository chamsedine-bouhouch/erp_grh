import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
var i=1;
@Component({
  selector: 'app-dashbord-employee',
  templateUrl: './dashbord-employee.component.html',
  styleUrls: ['./dashbord-employee.component.css']
})
export class DashbordEmployeeComponent implements OnInit {

  constructor(private router: Router, private r:ActivatedRoute, ) { }

  ngOnInit(): void {
    this.router.navigate(['Overview'], {relativeTo:this.r});
  }

  Tickets() {
    this.router.navigate(['Tickets'], {relativeTo:this.r}); }

    leaves() {
      this.router.navigate(['Leaves'], {relativeTo:this.r}); }

      overview()
      {
        this.router.navigate(['Overview'], {relativeTo:this.r}); }

        Activies()
        {
          this.router.navigate(['Notification'], {relativeTo:this.r}); }

          Profile()
          {
            this.router.navigate(['Profile'], {relativeTo:this.r});
          
            var t = document.getElementById("drop_down3");
          
           t!.style.display = "none";
            i=1 
           
          }

          drop_menu33() {
            var t = document.getElementById("drop_down33");
        
            if (i==1){
           
             t!.style.display = "block";
              i=2;
            
            }
            else
            { t!.style.display = "none";
            i=1 ;}
           
          }
}
