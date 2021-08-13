
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-admin-inovices',
  templateUrl: './admin-inovices.component.html',
  styleUrls: ['./admin-inovices.component.css']
})
export class AdminInovicesComponent implements OnInit {

  constructor(private router: Router, private r:ActivatedRoute,) { }

  ngOnInit(): void {
    this.router.navigate(['all'], {relativeTo:this.r});
  }

}
