'use strict';

import template from './list.html';

let productList = {
    bindings: {
        category: "<",
        store: "<",
    },
    template,
    controllerAs: 'productListVM',
    controller: function ($scope, $stateParams) {
        // this.product = product || productsData.products[0];
        this.productsList = products
        console.log('nested view');
        
    }
};

export default productList; 