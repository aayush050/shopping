import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web',
  template: `
    

  <ul>
  <li ><img src="dfhn.jpg" alt='logo' ></li>
  <li><a (click)="goToDashboard()" class="active">Dashboard</a></li>
  <li><a (click)="goToAllProduct()">All Products</a></li>
  <li><a (click)="goToSearch()" >Search</a></li>
  <li><a (click)="goToMyCart()">My Cart</a></li>
  <li class="align"><a (click)="logout()">Logout</a></li>
  <li class="align"><a (click)="goToProfile()">Profile</a> </li>
</ul>
<div>
<router-outlet></router-outlet>
</div>
  `,
  styles: [
`
img {
  display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      
      text-decoration: none;
}
.align{
  float:right;
}

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #333;
  }
  
  li {
      float: left;
  }
  
  li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      
      text-decoration: none;
  }
  
  li a:hover {
      background-color: #111;
  }
`
  ]
})
export class WebComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }
  goToDashboard()
  {
    this.route.navigate(['/web/dashboard']);
  }
  goToAllProduct()
  {
    this.route.navigate(['/web/allproduct']);
  }
  goToSearch()
  {
    this.route.navigate(['/web/search']);
  }
  goToMyCart()
  {
    this.route.navigate(['/web/mycart']);
  }
  logout()
  {
    this.route.navigate(['/login']);
  }
  goToProfile()
  {
    this.route.navigate(['/web/profile']);
  }





}
