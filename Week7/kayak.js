function isPalyndrome(word){
    if (word.length <= 1) return true;
    let p1 = 0;
    let p2 = word.length - 1;

    while (p1 < p2){
        const letter1 = word[p1];
        const letter2 = word[p2];        
        
        if (letter1 !== letter2){
            return false;
        } 
        
        p1++;
        p2--;
    }

    return true;
}

console.log(isPalyndrome("kayak"));
console.log(isPalyndrome("karbak"));

