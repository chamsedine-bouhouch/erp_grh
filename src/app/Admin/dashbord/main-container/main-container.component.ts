import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
var i=1;
@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  constructor(private router: Router, private r:ActivatedRoute, ) { }

  ngOnInit(): void {
    this.router.navigate(['overview'], {relativeTo:this.r});
  }

holiday() {
  this.router.navigate(['holiday'], {relativeTo:this.r}); }


  Payroll() {
  this.router.navigate(['payroll'], {relativeTo:this.r}); }

  
leaves() {
    this.router.navigate(['leaves'], {relativeTo:this.r}); }

    dashbord() {
      this.router.navigate(['overview'], {relativeTo:this.r}); }

     inovices() {
        this.router.navigate(['inovices'], {relativeTo:this.r}); }

        Tickets()
        {
          this.router.navigate(['Tickets'], {relativeTo:this.r}); }

          All_employees()
          { this.router.navigate(['All_employees'], {relativeTo:this.r});}


          leaves_settings()
          { this.router.navigate(['Leaves_settings'], {relativeTo:this.r});}

          Department() {
            this.router.navigate(['Departments'], {relativeTo:this.r}); }

            Designation() {
              this.router.navigate(['Designations'], {relativeTo:this.r}); }

              Activies()
              {
                this.router.navigate(['Notification'], {relativeTo:this.r}); }

                All_Clients()
                {
                  this.router.navigate(['All_Clients'], {relativeTo:this.r}); }

                  Profile()
                  {
                    this.router.navigate(['Profile'], {relativeTo:this.r});
                  
                    var t = document.getElementById("drop_down3");
                  
                   t!.style.display = "none";
                    i=1 
                   
                  }

                 Theme()
                  {
                    this.router.navigate(['Theme'], {relativeTo:this.r});
                  
                   
                   
                  }
                

                    Announcement()
                    {
                      this.router.navigate(['Announcement'], {relativeTo:this.r}); }


                      drop_menu3() {
                        var t = document.getElementById("drop_down3");
                    
                        if (i==1){
                       
                         t!.style.display = "block";
                          i=2;
                        
                        }
                        else
                        { t!.style.display = "none";
                        i=1 ;}
                       
                      }
  
}

