import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-search',
 template: `
 <h1>Search</h1>
 <table border="0" width="250" height="120">
 <tr>
 <td class="color" width="1%"><input type="checkbox" checked="checked"></td>
 <td class="tdcolor" width="20%"><label class="container">Footwear
 <span class="checkmark"></span>
 </label></td>
 </tr>
 <tr>
 <td class="color" width="15%"><input type="checkbox" checked="checked"></td>
 <td class="tdcolor" width="100%"><label class="container">Watches
 <span class="checkmark"></span>
 </label></td>
 </tr>
 <tr>
 <td class="color" width="15%"> <input type="checkbox" checked="checked"></td>
 <td class="tdcolor" width="100%"><label class="container">TShirts
 <span class="checkmark"></span>
 </label></td>
 </tr>
 </table>
 <br>
 <button>Search</button>

 
 `,
 styles: [`
 table
 {
 position: relative;
 left: 550px;
 top:200px;
 
 }
 button
 {
 position: relative;
 left: 550px;
 top:200px;

 }
 td{
 text-align:left;
 }
 .container{
 opacity:0.4;
 }
 .tdcolor{
 background-color:white;
 border-radius: 0px 10px 10px 0px;
 border: 1px solid white;
 padding: 2px; 
  

 }
 .color{
 background-color:#f0f5f5;
 border-radius: 10px 0px 0px 10px;
 border: 1px solid white;
 padding: 2px; 
 }
 .container input:checked ~ .checkmark:after {
 display: block
 }
 .container .checkmark:after {
 left: 9px;
 top: 5px;
 width: 5px;
 height: 10px;
 border: solid white;
 border-width: 0 3px 3px 0;
 -webkit-transform: rotate(45deg);
 -ms-transform: rotate(45deg);
 transform: rotate(45deg);
}
.checkmark:after {
 content: "";
 position: absolute;
 display: none;
}
.color  input:checked ~ .checkmark {
  background-color: black;
 `]
})
export class SearchComponent implements OnInit {

 constructor() { }

 ngOnInit() {
 }

}
