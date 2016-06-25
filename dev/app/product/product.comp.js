'use strict';

import template from './product.html';

let product = {
    bindings: {
        category: '<',
        product: '<',
    },
    template,
    controllerAs: 'productVM',
    controller: function () {
        this.goUp = function () {
            console.log('go Up')
            $state.go('^')
        };

        this.showProductCard = () => {
            console.log('show product card');
            $state.go('productCard')
        }
    },
}

export default product;

