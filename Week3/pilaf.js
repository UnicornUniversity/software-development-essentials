let meal = ["onion", "meat"];

function fry(listOfIngredients){
    console.log("=== Frying ===");
    for(let i = 0; i < listOfIngredients.length; i++){
        let nameOfIngredient = listOfIngredients[i];     
        console.log(nameOfIngredient + " is fried");
    }
    console.log("======");
}

fry(meal);

meal.push("carrot");

fry(meal);

function boil(listOfIngredients){
    console.log("=== Boiling ===");
    for(let i = 0; i < listOfIngredients.length; i++){
        let nameOfIngredient = listOfIngredients[i];
        console.log(nameOfIngredient + " is boiled");
    }
    console.log("======");
}

boil(meal);

meal.push("rice");

function stew(nameOfIngredients){
    console.log("===Stewing===");
    for (let i = 0; i < nameOfIngredients.length; i++){
        let name = nameOfIngredients[i];    
        console.log(name + " is stewing");
 
    }
    console.log("======");
}
stew(meal);
