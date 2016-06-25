'use strict';
import template from './home.html';
let _ = require('underscore');

let home = {
    template,
    controllerAs: 'homeCtrl',
    controller: function ($scope, productsData, storesData) {
        console.log(`home loaded`);

        $scope.stores = storesData.stores;
        let defaultStore = $scope.stores[0];
        $scope.currentStore = this.selectedStore || defaultStore; 
        
        // console.log($scope.stores);
        $scope.products = productsData.products;
        
        $scope.categories = _.uniq(_.pluck(productsData.products, 'category'));
        // console.log($scope.stores[0].name);

    }
};

export default home;