(function () {
    'use strict';

    angular
        .module('myApp')

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

})();