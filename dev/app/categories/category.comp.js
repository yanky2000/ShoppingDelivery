(function () {
    'use strict';

    angular
        .module('myApp')
        .component('category', {
            bindings: {
                product: "<",
                category: '<'
            },
            templateUrl: 'app/categories/category.tmpl.html',
            
            controllerAs: 'categoryModel',
            controller: function (filterGoods) {
                
                this.products =
                    filterGoods.filter({ category: this.category });
            }
        })

})();

