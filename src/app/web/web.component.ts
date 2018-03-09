import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
    selector: 'app-web',
    template: `
 <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
 <ul>
 <li ><img src="dfhn.jpg" alt='LOGO' ></li>
 <li><a (click)="goToDashboard()" class="active">Dashboard</a></li>
 <li><a (click)="goToAllProduct()">All Products<span class="w3-badge w3-red">{{this.products.product.length}}</span></a></li>
 <li><a (click)="goToSearch()" >Search</a></li>
 <li><a (click)="goToMyCart()">My Cart<span class="w3-badge w3-red">{{this.products.getcount()}}</span></a></li>
 <li class="align"><a (click)="logout()">Logout</a></li>
 <li class="align"><a (click)="goToProfile()">Profile</a> </li>
</ul>

<router-outlet></router-outlet>

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
 font-family: Arial, Helvetica, sans-serif;
 text-decoration: none;
 font-size: 15px;
 }
 
 li a:hover {
 background-color: #111;
 cursor:pointer;
 }
`
    ]
})
export class WebComponent implements OnInit {

    constructor(private route: Router, private products: ProductsService) { }

    ngOnInit() {

    }
    goToDashboard() {
        this.route.navigate(['/web/dashboard']);
    }
    goToAllProduct() {
        this.route.navigate(['/web/products']);
    }
    goToSearch() {
        this.route.navigate(['/web/search']);
    }
    goToMyCart() {
        this.route.navigate(['/web/mycart']);
    }
    logout() {
        this.route.navigate(['/login']);
    }
    goToProfile() {
        this.route.navigate(['/web/profile']);
    }





}
