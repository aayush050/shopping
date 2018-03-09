import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-mycart',
  template: `
  
  <h2> My Cart</h2>

  <table style="width:50%">
 <tr style="text-align: left">
   <th>Product Name</th> 
   <th>Category</th>
   <th>Product Description</th>
   <th>Price</th>
   <th>Action</th>
 </tr>

 <tr *ngFor="let pro of prod" style="text-align: left" >
 <td>{{pro.name}}</td>
 <td>{{pro.category}}</td>
 <td>{{pro.desc}}</td>
 <td>{{pro.price}}</td>
 <td><button>Remove</button></td>
</tr>

 
 
 
</table>
<br>
  
 
 
  `,
  styles: [
    `
h2{ 
    
  font-family: Arial, Helvetica, sans-serif;

  margin-left:30px;
  margin-top: 30px; 
}
th,td{
  width:10px;
  text-align:center;
  font-family: Arial, Helvetica, sans-serif;
}
table{
  margin-left:60px;
  margin-top: 30px; 

}
table:hover
{
  background-color:#f0f5f5;
}

`
  ]
})
export class MycartComponent implements OnInit {
  public prod = [];
  constructor(private products: ProductsService) { }

  ngOnInit() {
    debugger;
    this.prod = this.products.getcart();
  }

}
