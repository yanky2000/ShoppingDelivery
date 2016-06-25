'use strict';

const angular = require('angular');
const router = require('angular-ui-router');


import home from './home/home.comp';
import list from './list/list';
import store from './store/store.comp';
import category from './category/category.comp';
import product from './product/product.comp';
import productCard from './productCard/productCard';
import productsData from './common/productsData';
import storesData from './common/storesData';


angular.module('app', [router])

    .component('home', home)
    .component('list', list)
    .component('store', store)
    .component('category', category)
    .component('product', product)
    .component('productCard', productCard)
    .factory('productsData', productsData)
    .factory('storesData', storesData)

    .config(($stateProvider, $urlRouterProvider, $locationProvider) => {

        $urlRouterProvider.when("home", "/home/list");
        $urlRouterProvider.when("/home", "/home/list");

        $urlRouterProvider.otherwise('home/list');

        // $transitionsProvider.onBefore({
        //     to: state => !!state.abstract
        // }, ($transition$, $state) => {
        //     if (angular.isString($transition.to().abstract)) {
        //         return $state.target($transition.to().abstract);
        //     }
        // });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider
            .state('home', {
                abstract: true,
                url: '/',
                template: `<home></home>`
            })

            .state('list', {
                parent: 'home',
                url: '/list',
                template: '<list></list>',
                // controller: function ($scope, $stateParams) {
                // $scope.product = $scope.products[$stateParams.id];
                // }

            })

            .state('store', {
                url: '/store/:storeName',
                template: `<store></store>`
            })

            .state('productCard', {
                parent: 'home',
                url: '/productCard',
                template: '<product-card><product-card>'
            })

    });