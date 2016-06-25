'use strict';
import template from './category.html';


let category = {
    bindings: {
        product: "<",
        category: '<'
    },
    template,
    controllerAs: 'categoryModel',
    controller: function (productsData) {
        console.log('category has loaded');
        this.products =
            productsData.filter({ category: this.category });
            // productData.filterGoods({ category: "Овощи" });
    }
}

export default category