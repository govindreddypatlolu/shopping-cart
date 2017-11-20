"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var product_service_1 = require("../../services/product.service");
var CartComponent = (function () {
    function CartComponent(activatedRoute, productService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.items = [];
        this.total = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (parms) {
            var id = parms['id'];
            if (id) {
                var item = {
                    product: _this.productService.find(id),
                    quantity: 1
                };
                if (localStorage.getItem('cart') == null) {
                    var cart = [];
                    cart.push(JSON.stringify(item));
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
                else {
                    var cart = JSON.parse(localStorage.getItem('cart'));
                    var index = -1;
                    for (var i = 0; i < cart.length; i++) {
                        var item_1 = JSON.parse(cart[i]);
                        if (item_1.product.id == id) {
                            index = i;
                            break;
                        }
                    }
                    if (index == -1) {
                        cart.push(JSON.stringify(item));
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }
                    else {
                        var item_2 = JSON.parse(cart[index]);
                        item_2.quantity += 1;
                        cart[index] = JSON.stringify(item_2);
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }
                }
                _this.loadcart();
            }
            else {
                _this.loadcart();
            }
        });
    };
    CartComponent.prototype.loadcart = function () {
        this.total = 0;
        this.items = [];
        var cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
            var item = JSON.parse(cart[i]);
            this.items.push({
                product: item.product,
                quantity: item.quantity
            });
            console.log(item);
            this.total += item.Product * item.quantity;
        }
    };
    CartComponent.prototype.remove = function (id) {
        var cart = JSON.parse(localStorage.getItem('cart'));
        var index = -1;
        for (var i = 0; i < cart.length; i++) {
            var item = JSON.parse(cart[i]);
            if (item.product.id == id) {
                cart.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
    };
    return CartComponent;
}());
CartComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'my-app',
        templateUrl: "index.component.html",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        product_service_1.productService])
], CartComponent);
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map