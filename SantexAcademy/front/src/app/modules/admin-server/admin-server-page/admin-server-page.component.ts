import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-server-page',
  templateUrl: './admin-server-page.component.html',
  styleUrls: ['./admin-server-page.component.css'],
  standalone: true,
  imports: [

  ], 
    

})
export class AdminServerPageComponent implements OnInit {

  constructor(private router: Router) { }

  newQuestion(): void {
    this.router.navigate(['/adminServer/newQuestion']);
  }

  ngOnInit(): void {
  }

}
