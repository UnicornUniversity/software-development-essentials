function validator(s){
    const matches =
    {
        "(" : ")"
        ,"[" : "]"
    };

    const oppositeMatches =
    {
         ")" : "("
        , "]" : "["
    };

    let stack = [];

    for(const letter of s){
        if (letter in matches){
            stack.push(letter);
        }
        else if (letter in oppositeMatches){
            if (stack.length > 0){
                const previousParenthesis = stack.pop();
                if (oppositeMatches[letter] !== previousParenthesis){
                   return false;     
                }               
            }
        }
    }
    return true;
}

console.log(validator("var x = [1,3]"));
console.log(validator("var x = [1,3)"));