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
var productService = (function () {
    function productService() {
        this.products = [
            {
                "id": "p01",
                "name": "Apple-@7",
                "photo": "app/assets/images/iphone7.gif",
                "content": "Apple iPhone 7 smartphone was launched in September 2016. The phone comes with a 4.70-inch touchscreen display with a resolution of 750 pixels by 1334 pixels at a PPI of 326 pixels per inch. ",
                "price": 659.99
            },
            {
                "id": "p02",
                "name": "Iphone - 8",
                "photo": "app/assets/images/iphone-8.jpg",
                "content": "The iPhone 8 measures 5.45 inches tall by 2.65 inches wide and is 7.3 millimeters (0.29 inch) thick. Measuring 6.24 inches tall by 3.07 inches wide,  millimeters thicker at 7.7 millimeters (0.30 inch).  ",
                "price": 849
            },
            {
                "id": "p03",
                "name": "Ipone_x",
                "photo": "app/assets/images/iphone8.gif",
                "content": " iPhone X features an all-screen design with a 5.8-inch Super Retina HD display. Charges wirelessly. Resists water and dust. 12MP dual cameras with du. With iPhone X, the next era of iPhone has begun.",
                "price": 959
            },
            {
                "id": "p04",
                "name": "Samsung note-8",
                "photo": "app/assets/images/note-8.jpg",
                "content": "The Samsung Galaxy Note 4 is the fourth instalment in the Note phablet series. It brings a much sharper,In the Note 4, there is a 16-megapixel cam and a 3.7-megapixel front shooter for more detailed selfies",
                "price": 959
            },
            {
                "id": "p05",
                "name": "LG g-6",
                "photo": "app/assets/images/G-6.jpg",
                "content": "LG G6 smartphone was launched in February 2017. The phone comes with a 5.70-inch touchscreen display . The phone packs 32GB of internal storage that can be expanded up to 2000GB via a microSD card. ",
                "price": 521
            },
            {
                "id": "p06",
                "name": "Nokia edge",
                "photo": "app/assets/images/nokia.jpg",
                "content": "Nokia Edge mobile features a 5.2 13.21 cm display and runs on Android v7.0 (Nougat) operating system. The 3 GB of RAM. The battery is concerned it has 3600 mAh.Concerned this mobile has a 23 MP camera.",
                "price": 749
            }
        ];
    }
    productService.prototype.findAll = function () {
        return this.products;
    };
    productService.prototype.find = function (id) {
        return this.products[this.getSelectedIndex(id)];
    };
    productService.prototype.getSelectedIndex = function (id) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    return productService;
}());
productService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], productService);
exports.productService = productService;
//# sourceMappingURL=product.service.js.map