import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mycart',
  template: `
  
  <h2> My Cart</h2>

  <table style="width:50%">
 <tr style="text-align: left">
   <th>#</th>
   <th>Product Name</th> 
   <th>Category</th>
   <th>Product Description</th>
   <th>Price</th>
   <th>Action</th>
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
th{
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

  constructor() { }

  ngOnInit() {
  }

}
