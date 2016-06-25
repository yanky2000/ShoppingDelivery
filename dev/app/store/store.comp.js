'use strict';

import template from './store.html';

let store = {

    bindings: {
        store: "<" //show categories by store
    },
    template,
    controllerAs: 'storeModel',
    controller: function () {
        console.log('stores component loaded');
        this.categories = ['Овощи', "Фрукты"];
    },
};

export default store;