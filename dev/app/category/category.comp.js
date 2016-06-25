'use strict';
import template from './category.html';


let category = {
    bindings: {
        product: "<",
        category: '<'
    },
    template,
    controllerAs: 'categoryModel',
    controller: function (productData) {
        console.log('category has loaded');
        this.products =
            productData.filterGoods({ category: this.category });
            // productData.filterGoods({ category: "Овощи" });
    }
}

export default category