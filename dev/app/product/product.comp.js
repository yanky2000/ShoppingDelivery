(function () {
    'use strict';
    angular
        .module('myApp')
        .component('product', {
            bindings: {
                category: '<',
                product: '<',
            },
            templateUrl: 'app/product/product.tmpl.html',
            controllerAs: 'productModel',
            controller: function ($state) {
                // this.products = filterGoods.filter({ category: this.category });
                this.goUp = function () {
                    console.log('go Up')
                    $state.go('^')
                };

                this.showProductCard = () => {
                 console.log('show product card');
                    $state.go('productCard')
                }
            },
        })

})();