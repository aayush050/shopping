import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {
  public count = 0;
  constructor() { }
mycart = []
  watches = [
    { "url": "http://www.goldsmiths.co.uk/medias/?context=bWFzdGVyfGNvbnRlbnRfaW1hZ2VzfDQzMDQwfGltYWdlL2pwZWd8Y29udGVudF9pbWFnZXMvaDEyL2gyNC85MDQzMDEwNDUzNTM0LmpwZ3wwOGRjNmI3YzdmZGVkYzI2YTEwYzFkNjM2NTA4NGFjMWZlZjZiYWZhZjM0ZWY1ODk5NmUzYmRkNzcyNGNhZjIx", "name": "GOLDSMITHS", "category": "watch", "desc": "Omega Watch", "price": "$100" },
    { "url": "https://cdn.shopify.com/s/files/1/1663/6869/products/Fashion-simple-stylish-Top-Luxury-brand-MEGIR-Watches-men-Stainless-Steel-Mesh-strap-band-Quartz-watch_grande.jpg", "name": "MEGIR", "category": "watch", "desc": " Megir Grande", "price": "$70" },
    { "url": "http://imshopping.rediff.com/imgshop/800-1280/shopping/pixs/4901/c/currenbrown_57836f3a74bdb._curren-military-series-brown-sports-analog-watch-for-men.jpg", "name": "CURREN", "category": "watch", "desc": "Military Series", "price": "$95" },
    { "url": "https://cdn.shopclues.com/images/thumbnails/48968/320/320/10207877196838463936180359008732551EjvSf4hCL14577951751458580749146503747714708261161481344395.jpg", "name": "GOLDSTEEL", "category": "watch", "desc": "Automaton Watch", "price": "$60" },
    { "url": "https://ae01.alicdn.com/kf/HTB1Hf92KVXXXXcLXXXXq6xXFXXXS/BENYAR-Men-Genuine-Leather-Automatic-Luxury-Watch-Men-Brand-Business-Mechanical-Watches-Clock-Men-Casual-Watch.jpg_640x640.jpg", "name": "BENYAR", "category": "watch", "desc": "Genuine Leather Automatic", "price": "$75" },
    
    { "url": "https://http2.mlstatic.com/zapatillas-adidas-superstar-glitter-pink-rosa-D_NQ_NP_854193-MLA25736225252_072017-F.jpg", "name": "Adidas","category": "footwear", "desc": "Sneakers", "price": "$45" },
    { "url": "http://www.plasbrunplasticsengineering.co.uk/images/g87a85g4s/tumblr-nike-roshe-run-black-and-white-fpIs768.jpg", "name": "Nike","category": "footwear", "desc": "Casual wear", "price": "$42" },
    { "url": "https://s11.favim.com/orig/160315/adidas-cool-fancy-shoes-Favim.com-4083426.jpg", "name": "Adidas Superstar","category": "footwear", "desc": "Sneakers", "price": "$50" },
    { "url": "https://1043328364.rsc.cdn77.org/cs/1018/vans-106-vulcanized-cervena.jpg", "name": "Vans","category": "footwear", "desc": "Low Ankle", "price": "$39.99" },
    { "url": "https://i.pinimg.com/originals/14/98/bd/1498bdab8179188f207dce0388a3a844.jpg", "name": "Nike Hipster","category": "footwear", "desc": "Hipster Shoes", "price": "$42.35" },
    
    {"url":"https://www.jcrew.com/s7-img-facade/H6344_KA2996?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&wid=408&hei=408", "name":"J.Crew","category": "tshirt", "desc":"Girls'written in the stars","price":"$5"},
    {"url":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGd2bcQIQpSil-TadNbnpNIxBBEJvfyXljkzcu9lS-VW5fu7T", "name":"J.Crew","category": "tshirt", "desc":"Boys' striped-sleeve T-shirt","price":"$7"},
    {"url":"https://4.imimg.com/data4/YL/TR/MY-15994400/q-shirts-designer-t-shirts-with-graphics-250x250.jpg", "name":"IndiaMART","category": "tshirt", "desc":"Blue and Grey ","price":"$6"},
    {"url":"https://blog.codepen.io/wp-content/uploads/2017/03/codepen.jpg", "name":"CodePen","category": "tshirt", "desc":"CodePen T-Shirt ","price":"$10"},
    {"url":"https://i.pinimg.com/736x/ab/88/f4/ab88f45ebe273c13f75c2a7891004b66--harry-potter-merchandise-harry-potter-shirts-womens.jpg", "name":"Bewakoof ","category": "tshirt", "desc":"Harry Potter Shirts","price":"$9"},
    ]
  getwatch() {
    return this.watches;
  }
  getcount() {
    return this.count;
  }
  getcart() {
    return this.mycart;
  }

}
