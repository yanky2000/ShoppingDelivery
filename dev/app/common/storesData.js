'use strict';
const _ = require('underscore');

let storesData = function () {
    console.log('storesData loaded');

    var stores = [
        {
            name: "Ашан",
            // price: 125.90,
            // weightKg: 1,
            // sellBundle: 1,
            // sellParam: "weightKg",
            // category: "Овощи",
            // group: "",
            // description: "Огурцы весовые",
        },
        {
            name: "Метро",
            // price: 125.90,
            // weightKg: 1,
            // sellBundle: 1,
            // sellParam: "weightKg",
            // category: "Овощи",
            // group: "",
            // description: "Огурцы весовые",
        },
        {
            name: "Перекресток",
            // price: 125.90,
            // weightKg: 1,
            // sellBundle: 1,
            // sellParam: "weightKg",
            // category: "Овощи",
            // group: "",
            // description: "Огурцы весовые",
        },
    
    ]



    function filter(params) {
        return _.where(stores, params)
    }

    return {
        stores: stores,
        filter: filter
    }
}

export default storesData;
