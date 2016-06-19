(function () {
    'use strict';

    angular
        .module('myApp')
        .component('productCard', {
            bindings: {
                product: "<",
                category: '<'
            },
            templateUrl: 'app/productCard/productCard.html',
            controllerAs: 'productCard',
            controller: function (filterGoods) {

                this.products =
                    filterGoods.filter({ category: this.category });
            }
        })

})();