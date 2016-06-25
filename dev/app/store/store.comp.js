'use strict';

import template from './store.html';

let store = {

    // (function () {
    //     'use strict';

    //     angular
    //         .module('myApp')

    //         .component('store', {
    
    bindings: {
        store: "<" //show categories by store
    },
    template,
    // templateUrl: 'app/stores/store.tmpl.html',
    controllerAs: 'storeModel',
    controller: function () {
        console.log('stores component loaded');
        this.categories = ['Овощи', "Фрукты"];


        // this.categories = (filterGoods) => {

        //     filterGoods.filter({ category: 'Овощи'});
        // }


    },
};

export default store;
        // })

//         .component('testing', {
//             template: '<h1>should be redirected</h1>',
//             controller: function ($state) {
//                 $state.go('test2');
//             }
//         })



// })()