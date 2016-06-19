(function () {
    'use strict';

    angular
        .module('myApp')

        .component('store', {
            bindings: {
                store: "<" //show categories by store
            },
            templateUrl: 'app/stores/store.tmpl.html',
            controllerAs: 'storeModel',
            controller: function () {

                this.categories = ['Овощи', "Фрукты"];


                // this.categories = (filterGoods) => {

                //     filterGoods.filter({ category: 'Овощи'});
                // }


            },
        })

        .component('testing', {
            template: '<h1>should be redirected</h1>',
            controller: function ($state) {
                $state.go('test2');
            }
        })



})()