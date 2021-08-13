import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
var i=1;
@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent implements OnInit {
  Holiday = [
    {id:"1",Title:"New Year",Holiday_Date: '02/08/2021', 	comments: 'happy new year',  },
    {id:"2",Title:"Good Friday",Holiday_Date: '02/08/2021', 	From: 'happy new year',  },
    {id:"3",Title:"May Day",Holiday_Date: '02/08/2021', 	From: 'happy new year', },
  ];
  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {

    var x = document.getElementById("add_holiday");
    var d = document.getElementById("delete_holiday");
    var y = document.getElementById("edit_holiday");
    
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

   edit_holiday()
    { 
      var x = document.getElementById("edit_holiday");
      var w = document.getElementById("drop_down");
  
  
      
      w!.style.display = "none";
  
      if (x!.style.display == "none") {
        x!.style.display = "block";}
      } 

      add_holiday()
      { 
        var x = document.getElementById("add_holiday");
        var w = document.getElementById("drop_down");
    
    
        
        w!.style.display = "none";
    
        if (x!.style.display == "none") {
          x!.style.display = "block";}
        } 



     delete_holiday()
      { 
        var x = document.getElementById("delete_holiday");
        var w = document.getElementById("drop_down");
    
    
        
        w!.style.display = "none";
    
        if (x!.style.display == "none") {
          x!.style.display = "block";}
        } 



        hide()
        {
          var x = document.getElementById("add_holiday");
          var d = document.getElementById("delete_holiday");
          var y = document.getElementById("edit_holiday");
          
            x!.style.display = "none";
            y!.style.display = "none";
            d!.style.display = "none"
        
        }
}
