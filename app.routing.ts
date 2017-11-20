import {RouterModule, Routes}  from  '@angular/router';

import {CartComponent}  from './components/cart/cart.component';
import {ProductComponent} from  './components/product/product.component'
//import {AppPageNotFound} from './app.PageNotFound';


 const routes: Routes=[
   {path:'', component:ProductComponent},
   {path:'home', component:ProductComponent},
   {path:'cart',component:CartComponent},
   {path:'**',redirectTo:''}
 ];

 export const routing =RouterModule.forRoot(routes);
