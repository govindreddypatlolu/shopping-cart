import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule}  from  '@angular/http';
import { LocationStrategy,HashLocationStrategy} from "@angular/common";

import { AppComponent }  from './app.component';
import {ProductComponent}  from './components/product/product.component';
import {CartComponent}  from './components/cart/cart.component';
import {routing}  from  './app.routing';
//import {Appshoppingcart}  from './app.shoppingcart';
//import {Appcart}  from  './app.cart';
// import {AppPageNotFound}  from  './app.PageNotFound';
 
 import{ productService } from './services/product.service';

 
@NgModule({
  imports:      [ BrowserModule,HttpModule,routing],
//imports:      [ BrowserModule, RouterModule.forRoot(appRoutes)],
 // declarations: [ AppComponent , Appshoppingcart],
  declarations: [ AppComponent,ProductComponent,CartComponent ], //Appshoppingcart,Appcart,AppPageNotFound],
  providers:[
    productService,
  {provide: LocationStrategy,  useClass:HashLocationStrategy}
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
