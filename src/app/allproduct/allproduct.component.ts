import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-allproduct',
 template: `
 
 
<h2 float="right">PRODUCTS</h2>
<div class="card" >
<img src="http://cdn.shopify.com/s/files/1/1718/8809/products/SUPREME_x_LOUIS_VUITTON_Box_Tee_5_grande.jpg?v=1489482614" alt="shoe" style="width:100%">
<h3>SUPREME</h3>
<p class="title">Product Description</p>
<p>Product Price</p>

<p><button (click)="onclick()" *ngIf="change">Add to Cart</button></p>
<p><button (click)="onclick()" *ngIf="!change">Remove from Cart</button></p>
</div>



 `,
 styles: [`
 .card {
 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
 max-width: 300px;
 text-align: center;
 font-family: arial;
 float :left;
 background-color:#DCDCDC ;
 margin-left: 60px;
 

 
 }
 .image{
 height:40em; background-size:cover; width:auto;
 background-image:url('');
 background-color:#F5FFFA;
 background-position:50% 50%;
 
 }
 img{
 width: 250px;
 height: 150px;
 transition: transform .3s;
 }
 div{
 
 padding:10px;

 }


 h2{
 color: grey;
 font-size: 35px;
 font-family: arial;
 opacity: 0.7;
 margin-left:30px;
 margin-top: 30px;

 }
 .title {
 color: grey;
 font-size: 15px;
 
 }
 
 button {
 border: none;
 outline: 0;
 display: inline-block;
 padding: 5px;
 color: white;
 background-color: #000;
 text-align: center;
 cursor: pointer;
 width: 70%;
 font-size: 18px;
 cursor: pointer;
 }
 
 a {
 text-decoration: none;
 font-size: 22px;
 color: black;
 }
 
 button:hover, a:hover {
 opacity: 0.7;
 }
 img:hover{
 
 transform: scale(1.25); 
 transform: scale(1.25); 
 transform: scale(1.25); 
 }
 `]
})
export class AllproductComponent implements OnInit {
 public change=true;
 constructor() { }

 ngOnInit() {
 }
 onclick(){
 this.change=false;
 }

}
