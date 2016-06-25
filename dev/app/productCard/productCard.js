'use strict';

import template from './productCard.html';

let productCard = {
    bindings: {
        product: "<",
    },
    template,
    controllerAs: 'productCardVM',
    controller: function (productsData) {
        this.product = product || productsData.products[0];
    }
};

export default productCard;