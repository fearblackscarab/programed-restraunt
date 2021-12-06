/* creating a class "store" with food,drink, and dessert objects for the menu

display the menu objects in each of there respective sections
/display image
/display name
/display quantity
/display button(to add to checkout)

display checkout total "count" of items on page to keep the user informed
/also display the total price near the count

on clicking display button add class d-none to menu-food 
/remove d-none from checkout

*/

class Store {
    constructor() {
        this.itemsCart = {
            itemCount: 0,
            subTotal: 0
        }
        this.inventory = {
            item1: {

                id: 1,
                img: 'media/burger.png',
                alt: 'burger',
                class: 'food',
                price: 10.00,
                qty: 0,
                name: 'burger',
                productCode: 'PH879042'
            },

            item2: {
                id: 2,
                img: 'media/fries.jpg',
                alt: 'fries',
                class: 'food',
                price: 5.00,
                qty: 0,
                name: 'fries',
                productCode: 'YR940345'
            },

            item3: {
                id: 3,
                img: 'media/nachos.jpg',
                alt: 'nachos',
                class: 'food',
                price: 12.00,
                qty: 0,
                name: 'nachos',
                productCode: 'TT743923'
            },

            item4: {
                id: 4,
                img: 'media/quesadilla.jpg',
                alt: 'quesadilla',
                class: 'food',
                price: 3.00,
                qty: 0,
                name: 'quesadilla',
                productCode: 'LM12309'
            },

            item5: {
                id: 5,
                img: 'media/wedges.jpg',
                alt: 'potato wedges',
                class: 'food',
                price: 5.00,
                qty: 0,
                name: 'potato wedges',
                productCode: 'PH778932'
            },

            item6: {
                id: 6,
                img: 'media/chicken.jpg',
                alt: 'fried chicken',
                class: 'food',
                price: 8.00,
                qty: 0,
                name: 'fried chicken',
                productCode: 'MN556832'
            },

            item7: {
                id: 7,
                img: 'media/nuggets.jpg',
                alt: 'nuggets',
                class: 'food',
                price: 19.00,
                qty: 0,
                name: 'nuggets',
                productCode: 'KG320563'
            },

            item8: {
                id: 8,
                img: 'media/pasta-salad.jpg',
                alt: 'pasta salad',
                class: 'food',
                price: 20.00,
                qty: 0,
                name: 'pasta salad',
                productCode: 'YR094562'
            },

            item9: {
                id: 9,
                img: 'media/smoothie.jpg',
                alt: 'smoothie',
                class: 'drink',
                price: 5.00,
                qty: 0,
                name: 'smoothie',
                productCode: 'YR094562'
            },

            item10: {
                id: 10,
                img: 'media/ice-cream.jpg',
                alt: 'ice cream',
                class: 'dessert',
                price: 800.00,
                qty: 0,
                name: 'ice cream',
                productCode: 'YR094562'
            },

            item11: {
                id: 11,
                img: 'media/coke.jpg',
                alt: 'coke',
                class: 'drink',
                price: 2.00,
                qty: 0,
                name: 'coke',
                productCode: 'YR094562'
            },

            item12: {
                id: 12,
                img: 'media/sprite.jpg',
                alt: 'sprite',
                class: 'drink',
                price: 2.00,
                qty: 0,
                name: 'sprite',
                productCode: 'YR094562'
            },

            item13: {
                id: 13,
                img: 'media/kladdkaka.jpg',
                alt: 'kladdkaka',
                class: 'dessert',
                price: 5.00,
                qty: 0,
                name: 'kladdkaka',
                productCode: 'YR094562'
            }
        }
    }

    init() {
        this.loadItems()
        this.addToCart()
        this.checkout()
    }

    loadItems() {
        let food = document.getElementById('food');
        let drink = document.getElementById('drink');
        let dessert = document.getElementById('dessert');

        for (const key in this.inventory) {
            let item = this.inventory[key];
            let itemDisplay = `
            <div class="card menu-card">
            <img src="${item.img}" alt="${item.alt}" class="img-fluid item-img">
            <p class="item-text text-center">${item.name}</p>
            <button class="add-button btn" data-id="${item.id}">add to cart</button>
            </div>`

            if (item.class == 'food') {
                food.innerHTML += itemDisplay
            } else if (item.class == 'drink') {
                drink.innerHTML += itemDisplay
            } else {
                dessert.innerHTML += itemDisplay
            }
        }
    }

    addToCart() {
        let addButton = document.querySelectorAll('.add-button');
        let countDisplay = document.getElementById('countDisplay');
        let totalDisplay = document.getElementById('totalDisplay');
        let table = document.getElementById('tbody');
        let subTimeQty = 0;
        let subtotalValue = document.getElementById('subtotalValue');
        let taxValue = document.getElementById('taxValue');
        let totalValue = document.getElementById('totalValue');
        let tax = 0;
        let shippingValue = document.getElementById('shippingValue');
        let shipping = 5;
        let itemCount = 0;
        let price = 0;

        addButton.forEach((el) => {
            el.addEventListener('click', () => {
                for (const key in this.inventory) {
                    let item = this.inventory[key];
                    if (el.dataset['id'] == item.id) {
                        itemCount++
                        price += item.price;
                        this.itemsCart.itemCount = itemCount;
                        this.itemsCart.subTotal = price;

                        item.qty++;
                        console.log(item)
                        console.log(this.itemsCart)

                        subTimeQty = (item.qty * item.price).toFixed(2);
                        subtotalValue.innerText = this.itemsCart.subTotal.toFixed(2);
                        shippingValue.innerText = shipping.toFixed(2);
                        tax = this.itemsCart.subTotal * 0.07;
                        taxValue.innerText = tax.toFixed(2);
                        totalValue.innerText = (this.itemsCart.subTotal + tax + shipping).toFixed(2);

                        // if qty is > 0(item is added to cart)
                        if (item.qty >1) {
                            let qtyInput=document.querySelectorAll('.qty-input-value');
                            let itemSubtotal=document.querySelectorAll('.item-subtotal')
                            qtyInput.forEach((element)=>{
                                if(element.dataset['id']==item.id){
                                    element.innerText=`${item.qty}`
                                }
                            })

                            itemSubtotal.forEach((el)=>{
                                if(el.dataset['id']==item.id){
                                    el.innerText=`${subTimeQty}`
                                }
                            })
                        }
                        else{
                            const tableRow = document.createElement('tr');
                            tableRow.className = 'product-checkout';

                            tableRow.innerHTML += `
                            <td id="checkoutImg">
                            <div class="row">
                            <img src="${item.img}" alt="${item.alt}" class="col img-fluid checkout-img">
                            <p class="col text-center item-name">${item.name}</p>
                            </div>
                            <div class="product-desc">
                            </div>
                            </td>
                            <td id="productCode">${item.productCode}</td>
                            <td>
                            <p class="unit-price">${item.price.toFixed(2)}</p>
                            </td>
                            <td>
                            <div id="itemQuantity">
                            <p class="text-center qty-input-value" id="qtyInput" data-id="${item.id}">${item.qty}</p>
                            </td>
                            <td class="item-subtotal" id="itemSubtotal" data-id="${item.id}">${subTimeQty}</td>`

                            table.append(tableRow);
                        }
                    }
                    countDisplay.innerText = itemCount;
                    totalDisplay.innerText = price.toFixed(2)
                }
                console.log('click')
            })
        })
    }
    checkout() {
        let checkout = document.getElementById('checkout');
        let checkoutItemCount = document.getElementById('checkoutItemCount');
        let checkoutNavItems = document.querySelectorAll('.checkout-nav-item');
        let menu = document.querySelector('.menu-food');
        let checkDisplay = document.querySelector('.checkout-page');

        checkoutNavItems.forEach((el) => {
            el.addEventListener('click', () => {
                if (menu.classList.contains('d-none') === false) {
                    menu.classList.add('d-none')
                    checkDisplay.classList.remove('d-none')
                    checkoutNavItems.forEach((el) => {
                        el.innerText = 'MENU'
                    })
                }
                else {
                    menu.classList.remove('d-none')
                    checkDisplay.classList.add('d-none')
                    checkoutNavItems.forEach((el) => {
                        el.innerText = 'CHECKOUT'
                    })
                }

                if (this.itemsCart == 1) {
                    checkoutItemCount.innerText = `${this.itemsCart.itemCount} item`
                } else {
                    checkoutItemCount.innerText = `${this.itemsCart.itemCount} items`
                }
                console.log('click')
            })
            console.log(el)
        })

        checkout.addEventListener('click', () => {

            if (menu.classList.contains('d-none') === false) {
                menu.classList.add('d-none')
                checkDisplay.classList.remove('d-none')
                checkoutNavItems.forEach((el) => {
                    el.innerText = 'MENU'
                })
            }
            else {
                menu.classList.remove('d-none')
                checkDisplay.classList.add('d-none')
                checkoutNavItems.forEach((el) => {
                    el.innerText = 'CHECKOUT'
                })
            }

            if (this.itemsCart == 1) {
                checkoutItemCount.innerText = `${this.itemsCart.itemCount} item`
            } else {
                checkoutItemCount.innerText = `${this.itemsCart.itemCount} items`
            }
            console.log('click')
        })
    }
}

action = new Store
action.init()