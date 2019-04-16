console.log("fastFood.js")

                    // food order function 

const restaurant = {
    name: "Bob's Burgers",
    order: [],
    placeOrder: function (meal) {
        this.order.push(meal)
    },
    getOrders: function(){
        // console.log(this.order)
        return this.order
    }
    
}
    
const chickenComboMeal = {
    sandwichType: "Chicken sandwich",
    fries: true,
    drinkSize: "large"
    
}
restaurant.placeOrder(chickenComboMeal);
let allOrders = restaurant.getOrders();
console.log(allOrders)
