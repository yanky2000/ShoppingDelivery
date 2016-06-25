'use strict';
import template from './home.html';

let home = {
    template,
    controllerAs: 'homeCtrl',
    controller: function () {
        console.log(`home loaded`);
        this.stores = [
            { name: 'Ашан' },
            { name: 'Метро' },
        ];
    }
};

export default home;