import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

 constructor() { }

 watches=[
{"url":"http://www.goldsmiths.co.uk/medias/?context=bWFzdGVyfGNvbnRlbnRfaW1hZ2VzfDQzMDQwfGltYWdlL2pwZWd8Y29udGVudF9pbWFnZXMvaDEyL2gyNC85MDQzMDEwNDUzNTM0LmpwZ3wwOGRjNmI3YzdmZGVkYzI2YTEwYzFkNjM2NTA4NGFjMWZlZjZiYWZhZjM0ZWY1ODk5NmUzYmRkNzcyNGNhZjIx", "name":"GOLDSMITHS", "desc":"Omega Watch","price":"$100"},
{"url":"https://cdn.shopify.com/s/files/1/1663/6869/products/Fashion-simple-stylish-Top-Luxury-brand-MEGIR-Watches-men-Stainless-Steel-Mesh-strap-band-Quartz-watch_grande.jpg", "name":"MEGIR", "desc":" Megir Grande","price":"$70"},
{"url":"http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/4901/c/currenbrown_57836f3a74bdb._curren-military-series-brown-sports-analog-watch-for-men.jpg", "name":"CURREN", "desc":"Military Series","price":"$95"},
{"url":"https://cdn.shopclues.com/images/thumbnails/48968/320/320/10207877196838463936180359008732551EjvSf4hCL14577951751458580749146503747714708261161481344395.jpg", "name":"GOLDSTEEL", "desc":"Automaton Watch","price":"$60"},
{"url":"https://ae01.alicdn.com/kf/HTB1Hf92KVXXXXcLXXXXq6xXFXXXS/BENYAR-Men-Genuine-Leather-Automatic-Luxury-Watch-Men-Brand-Business-Mechanical-Watches-Clock-Men-Casual-Watch.jpg_640x640.jpg", "name":"BENYAR", "desc":"Genuine Leather Automatic","price":"$75"}

 ]

getwatch()
{
 return this.watches;
}

}
