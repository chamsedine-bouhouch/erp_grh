import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
var i=1;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  Profile = [
    {Photo:"photo",name:"jhon",Id: 123, 	Email: 'jhon@gmail.com', Mobile: '25047889', Join_Date: '02/08/2021',
    Birthday:'20-02-1999', Role: 'Web Designer', Address:'adress exp test123', Gender:'Male',RIB:'0000000000' },]
  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {

    var x = document.getElementById("profile_info");
    x!.style.display = "none";
  }


  dashbord() {
    this.router.navigate(['../overview'], {relativeTo:this.r}); }

  
  profile_info()
  { 
    var x = document.getElementById("profile_info");
   


    
    


    if (x!.style.display == "none") {
      x!.style.display = "block";
    

    }
    } 

    hide()
    {
      var x = document.getElementById("profile_info");
      var d = document.getElementById("delete_employee");
      var y = document.getElementById("edit_employee");
      
        x!.style.display = "none";
        y!.style.display = "none";
        d!.style.display = "none"
    
    }

}
