'use strict';

const angular = require('angular');
const router = require('angular-ui-router');


import home from './home/home.comp';
import store from './store/store.comp';
import category from './category/category.comp';
import productData from './common/productData';
import product from './product/product.comp';
import productCard from './productCard/productCard';


angular.module('app', [router])
    
    .component('home', home)
    .component('store', store)
    .component('category', category)
    .component('product', product)
    .component('productCard', productCard)
    .factory('productData', productData)

    .config(($stateProvider, $urlRouterProvider, $locationProvider) => {
        $urlRouterProvider.otherwise('home');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        $stateProvider
            .state('home', {
                url: '/',
                template: `<home></home>`
            })

            .state('store', {
                url: '/store/:storeName',
                template: `<store></store>`
            })

            .state('test', {
                url: '/test',
                template: '<testing></testing>'
            })

            .state('productCard', {
                url: '/productCard',
                template: '<product-card><product-card>'
            })

    });