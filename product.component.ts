import { Component,OnInit } from '@angular/core';


import  {Product}  from  '../../entities/product.entities';
import  {productService}  from '../../services/product.service';


@Component({
  moduleId: module.id,
  //selector: 'my-app',
  templateUrl: `index.component.html`,
})
export class ProductComponent implements OnInit  { 

    private products: Product[];
  
  
  constructor(
      private productService: productService 
          
      
  ){}
  ngOnInit(){
      this.products = this.productService.findAll();

  }
}
