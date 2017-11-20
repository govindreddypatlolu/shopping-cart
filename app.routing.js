"use strict";
var router_1 = require("@angular/router");
var cart_component_1 = require("./components/cart/cart.component");
var product_component_1 = require("./components/product/product.component");
//import {AppPageNotFound} from './app.PageNotFound';
var routes = [
    { path: '', component: product_component_1.ProductComponent },
    { path: 'home', component: product_component_1.ProductComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routing.js.map