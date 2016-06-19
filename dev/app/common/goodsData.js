(function () {
    'use strict';

    angular
        .module('myApp')
        .factory('goodsData', function () {
            console.log('goods loaded');
            return {

                goods: [

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
                    },



                ]

            }
        })
        .service('filterGoods', function (goodsData) {

            this.filter = function (params) {
                // console.log(`key is + ${key}`)
                return _.where(goodsData.goods, params)
            }
        })


})();