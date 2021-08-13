import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inovices',
  templateUrl: './inovices.component.html',
  styleUrls: ['./inovices.component.css']
})
export class InovicesComponent implements OnInit {

 Inovice = [
    { id: 4454830, 	Subject: 'Android Application', Created: '12-2-02-2021', Last_activity: '12-2-02-2021', Status: 'paid' },
  
  
   
  ];
  constructor() { }

  ngOnInit(): void {
  }

  on_click()
  {

  }

}
