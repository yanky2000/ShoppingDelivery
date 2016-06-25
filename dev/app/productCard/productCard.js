'use strict';

import template from './productCard.html';

let productCard = {
    bindings: {
        product: "<",
    },
    template,
    controllerAs: 'productCardVM',
    controller: function (productData) {
        this.product = productData.goods[0];
        // this.products =
        //     filterGoods.filter({ category: this.category });
    }
};

export default productCard;