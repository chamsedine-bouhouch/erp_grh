import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user.model';
import {AuthService} from '../../shared/auth.service';
var i=1;
@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {


  UserProfile: User;


  






  constructor(public authService: AuthService) {
    this.UserProfile = new  User('','');
  }

  ngOnInit(): void {

    var t = document.getElementById("drop_down");
    t!.style.display = "none";

    this.authService.profileUser().subscribe((data:any) => {
      console.log(data);
      this.UserProfile = data;

     
    });
  
  
  

  
  }



  drop_menu() {
    var t = document.getElementById("drop_down");

    if (i==1){
   
     t!.style.display = "block";
      i=2;
    
    }
    else
    { t!.style.display = "none";
    i=1 ;}
   
  }
  
  show1() {
    var x = document.getElementById("ticket");
    var y = document.getElementById("inovices");

    if (y!.style.display == "none") {
      y!.style.display = "block";
    x!.style.display = "none";
    } else {
      x!.style.display = "none";
      y!.style.display = "block";
    }
  }

  show2() {
    var x = document.getElementById("ticket");
    var y = document.getElementById("inovices");

    if (x!.style.display == "none") {
      x!.style.display = "block";
     y!.style.display = "none";
    } 
  }
}