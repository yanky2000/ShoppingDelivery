'use strict';
const _ = require('underscore');

let productsData = function () {
    console.log('goods loaded');

    var products = [
        {
            name: "Огурцы",
            price: 125.90,
            weightKg: 1,
            sellBundle: 1,
            sellParam: "weightKg",
            category: "Овощи",
            group: "",
            description: "Огурцы весовые",
        },
        {
            "name": "Помидоры",
            "price": 160.00,
            "weightKg": 1,
            "sellBundle": 1,
            "sellParam": "weightKg",
            "category": "Овощи",
            "description": "Помидоры свежие, весовые",
        },
        {
            "name": "Капуста",
            "price": 30.00,
            "weightKg": 1,
            "sellBundle": 1,
            "sellParam": "weightKg",
            "category": "Овощи",
            "description": "Капуста б/к",
        },
        {
            "name": "Мука",
            "price": 50.00,
            "weightKg": 0.9,
            "sellBundle": 1,
            "sellParam": "Pcs",
            "category": "Бакалея",
            "description": "Мука",
        }

    ]



    function filter(params) {
        return _.where(products, params)
    }

    return {
        products: products,
        filter: filter
    }
}

export default productsData;
