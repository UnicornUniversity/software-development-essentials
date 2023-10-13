function boil(name_of_ingredient){
    console.log(name_of_ingredient + " is boiled");
}

function fry(name_of_ingredient){
    console.log(name_of_ingredient + " is fried");
}

function cookBorsch(){
    //this is a local variable that points to the list. Literally, borsch (soup) "knows" abot its ingredients.
    let ingredients = ["beets", "potatoes", "carrots"];

    //NOTE: I create "i" variable in each loop. These are different local variables.
    for(let i = 0; i < ingredients.length; i++){
        let ingredient = ingredients[i];
        boil(ingredient);
    }

    for(let i = 0; i < ingredients.length; i++){
        let ingredient = ingredients[i];
        fry(ingredient);
    }

    console.log("Mix all together... Bon appetit!");
}

//let's cook!
cookBorsch();




