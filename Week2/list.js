// array / list

//here we declare array and fill it with two values
let products = ["Bread", "Milk"];

//let's add 3 more values
products.push("Cheese", "Apples", "Fish");

//what do we have?
for(let i = 0; i < products.length; i++){
    console.log(products[i]);
}

console.log("----------------");

//let's remove Milk and Cheese. First argument is index of the first element to be deleted. The second argument is number of elements to be deleted.
products.splice(1, 2);

//what do we have?
for(let i = 0; i < products.length; i++){
    console.log(products[i]);
}
