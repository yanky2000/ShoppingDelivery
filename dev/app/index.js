'use strict';

import angular from 'angular';
import router from 'angular-ui-router';

import home from './home/home.comp';
import list from './list/list';
// import store from './store/store.comp';
// import category from './category/category.comp';
// import product from './product/product.comp';
// import productCard from './productCard/productCard';
// import productsData from './common/productsData';
// import storesData from './common/storesData';


angular.module('app', [router])
    .component('home', home)
    .component('list', list)
    // .component('store', store)
    // .component('category', category)
    // .component('product', product)
    // .component('productCard', productCard)
    // .factory('productsData', productsData)
    // .factory('storesData', storesData)

    .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
    // .config(($stateProvider, $urlRouterProvider, $locationProvider, $transitionsProvider) => {

        // $transitionsProvider.onBefore({
        //     to: state => !!state.abstract
        // }, ($transition$, $state, $injector) => {
        //     let abstractParam = $transition$.to().abstract;

        //     if (angular.isFunction(abstractParam)) {
        //         return $state.target($injector.invoke(abstractParam), $transition$.params())
        //     } else if (angular.isString(abstractParam)) {
        //         return $state.target(abstractParam, $transition$.params());
        //     }
        // });

        $urlRouterProvider.otherwise('/home');

        // $urlRouterProvider.when("home", "home/list");
        // $urlRouterProvider.when("/home", "home/list");

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider
            .state({
                name: 'home',
                url: '/home',
                // abstract: 'home.list',
                // abstract: true,
                // template: `<p>test</p>2`
                template: `<home></home>`
            })
     
            .state('list', {
                url: '/list',
                template: '<list></list>'
                // template: '<p>asdfas</p>asdfas'
                // controller: function ($scope, $stateParams) {
                // $scope.product = $scope.products[$stateParams.id];
                // }

              
            })

    });