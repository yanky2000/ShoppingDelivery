'use strict';
const _ = require('underscore');

let productData = function () {
    console.log('goods loaded');

    var goods = [
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



    function filterGoods(params) {
        // console.log(`goods is ` + goods);
        // console.info(goods);
        // console.info(_.where(goods, { category: "Овощи" }))
        // console.log(` Овощи output is ` + output); 
        return _.where(goods, params)
    }

    return {
        goods: goods,
        filterGoods: filterGoods
    }
}

export default productData;
