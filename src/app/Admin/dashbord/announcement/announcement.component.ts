import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
var i=1;
@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  Announcement = [
    {Title:"New Year",start: '02/08/2021', 	end: '02/08/2021',  },

  ];
  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {
    var x = document.getElementById("add_Announcement");
    var d = document.getElementById("delete_Announcement");
    var y = document.getElementById("edit_Announcement");
    
      x!.style.display = "none";
      y!.style.display = "none";
      d!.style.display = "none"
  }


  drp_down()
  { 
    var w = document.getElementById("drop_down");
  
  if (i==1){
   
    w!.style.display = "block";
    i=2;
  
  }
  else
  { w!.style.display = "none";
  i=1 ;}
  
  }

  dashbord() {
    this.router.navigate(['../overview'], {relativeTo:this.r}); }

   edit_Announcement()
    { 
      var x = document.getElementById("edit_Announcement");
      var w = document.getElementById("drop_down");
  
  
      
      w!.style.display = "none";
  
      if (x!.style.display == "none") {
        x!.style.display = "block";}
      } 

      add_Announcement()
      { 
        var x = document.getElementById("add_Announcement");
        var w = document.getElementById("drop_down");
    
    
        
        w!.style.display = "none";
    
        if (x!.style.display == "none") {
          x!.style.display = "block";}
        } 



     delete_Announcement()
      { 
        var x = document.getElementById("delete_Announcement");
        var w = document.getElementById("drop_down");
    
    
        
        w!.style.display = "none";
    
        if (x!.style.display == "none") {
          x!.style.display = "block";}
        } 



        hide()
        {
          var x = document.getElementById("add_Announcement");
          var d = document.getElementById("delete_Announcement");
          var y = document.getElementById("edit_Announcement");
          
            x!.style.display = "none";
            y!.style.display = "none";
            d!.style.display = "none"
        
        }

}
