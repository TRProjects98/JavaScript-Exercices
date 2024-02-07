//Exercise6 - Create a function that takes an array of objects (groceries) which calculates the total price and
//returns it as a number. A grocery object has a product, a quantity and a price.

let list = [
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
]

//Create a function with a parameter
function getTotalPrice(groceries) {

    //Create the bill variable
	let bill = 0;

    //For each element in the list
    groceries.forEach(element => {

        //Add to the bill the price of the element multiplied by the quantity
        bill = bill + (element.price * element.quantity)
    });

    //Return the bill
    return bill
}

console.log(getTotalPrice(list))