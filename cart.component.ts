import { Component,OnInit } from '@angular/core';
import {ActivatedRoute}   from '@angular/router';

import  {Product}  from  '../../entities/product.entities';
import  {Item}  from  '../../entities/item.entities';
import  {productService}  from '../../services/product.service';



@Component({
  moduleId: module.id,
  //selector: 'my-app',
  templateUrl: `index.component.html`,
})
export class CartComponent implements OnInit  { 

    private items: Item[]=[];
    public total: number = 0;

    constructor(
        private activatedRoute: ActivatedRoute,
        private productService: productService
    ){}
   
    ngOnInit(){
        this.activatedRoute.params.subscribe(parms=> {
            var id = parms['id'];
            if(id) {
                var item: Item = {
                    product: this.productService.find(id),
                    quantity:1
                };
                if(localStorage.getItem('cart') == null){
                    let cart: any = [];
                    cart.push(JSON.stringify(item));
                    localStorage.setItem('cart',JSON.stringify(cart));
                }else{
                    let cart: any= JSON.parse(localStorage.getItem('cart'));
                    let index: number=-1;
                    for( var i=0; i<cart.length; i++){
                        let item: Item = JSON.parse(cart[i]);
                        if( item.product.id ==id ) {
                            index = i;
                            break;
                        }
                    }
                    if( index==-1){
                        cart.push(JSON.stringify(item));
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }
                    else{
                        var item_2 = JSON.parse(cart[index]);
                        item_2.quantity +=1;
                        cart[index] = JSON.stringify(item_2);
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }
                }
                this.loadcart();
            }else{
                this.loadcart();
            }
        } );

  }
  loadcart(): void{
      this.total =0;
      this.items = [];
      let cart = JSON.parse(localStorage.getItem('cart'));
      for(var i = 0; i< cart.length; i++){
          let item = JSON.parse(cart[i]);
          this.items.push({
              product:item.product,
              quantity:item.quantity
          });
          console.log(item)
          this.total += item.Product * item.quantity;
      }
  }
  remove(id:string): void{
      let cart: any = JSON.parse(localStorage.getItem('cart'));
      let index: number=-1;
      for( var i=0; i<cart.length; i++){
          let item: Item = JSON.parse(cart[i]);
          if( item.product.id ==id ) {
              cart.splice(i,1);
              break;
           }    
         }
         localStorage.setItem("cart", JSON.stringify(cart));
        }
    }
