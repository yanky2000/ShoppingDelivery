/*
========= HOME PAGE ============

=== DEFINITIONS
Home page should contain:
1. List of categories
2. List of products
3. Search field
4. Link to busket and shopping list
5. Store name

By default first view is unsorted list of products, by general popularity (star rating)
Products in each category should be in popularity descendant order

=== ACTIONS
- click on store name should view(lead to?) store select window
- When click on category tab product list should contain only that category items

    Product card
    - when click on plus button - 1 piece should be added to shopping list, total value should change.
    

    Search
    - When I input anything into search field product list should change (if nothing in there show "no product matching")
    - When input field value changes product list should change as well.

    Busket
    - When click on image of any item in shopping list - show productCard.
    - When click on addOne button - should add 1 selling bundle to certain item (and total Value should change)
    - When click on removeOne button - should remove 1 selling bundle to certain item (and total Value should change), cannot be less than 0.
    - When click removeItem - remove item
    - When click on clearList - clear shoppingList.


========= PRODUCT CARD ============

=== DEFINITIONS
- item name
-  description
-  image
-  price
-  weight (optional)
-  sellign quantity (bundle)
- addOne, removeOne functions
- buying quantity & value

=== ACTIONS
- andOne, removeOne() changes buying quantity & value
- setQuantity() changes buying quantity & value (and busket values)

- Back nav button leads to previous state(view)


========= ORDER ============
** Should be defined:
- shoppingList
- total value
- userDeliveryAddress
- userDeliveryTime
- startPayment()
- addOne, removeOne(), removeItem(),

- addOne, removeOne(), removeItem() changes totalValue
- startPayment() shows "Order submitted", adds shoppingList to userOrders
- changeDeliveryAddress() changes userDeliveryAddress
- changeDeliveryTime() changes userDeliveryTime (shows available options 'checkbox)

========= USER SETTING ============
** Should be defined:
- user name
-  tel, email
-  login and password
- userDeliveryAddress
- user default store (optional)
- user previous orders userOrders{}
- saveSettings(), cancelSettings(), closePanel()

- asks for login and password before viewing state. 
- all settings can be set to new temp values
- when saveSettings() tempValues become userValues
- cancelSettings() discard tempValues and restores previous userValues
- closePanel() returns to previous state()
- required settings can't be set to undefined
- required settings can't be set to undefined



*/