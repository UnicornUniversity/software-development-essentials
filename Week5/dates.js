
const dtNow = Date.now().toString();
//console.log(dtNow );

const dt = new Date(1975, 11, 32);
//console.log(dt.toString() );

const dateNow = new Date(Date.now());
//console.log(dateNow);
const currentYear = dateNow.getFullYear();
const maxYear = currentYear - 19;
const minYear = currentYear - 35;

//console.log("Years range: " + minYear + "-" + maxYear);

//returns us [0; 99)
//we need 1988-2004
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const yearDiff = maxYear - minYear;

const generatedYear = getRandomInt(yearDiff + 1) + minYear;
//console.log("generatedYear: " + generatedYear);

const generatedMonth = getRandomInt(11);
const generatedDay = getRandomInt(32) + 1;

const birthday = new Date(generatedYear, generatedMonth, generatedDay);
console.log("birthday: " + birthday.toISOString());

const gender = getRandomInt(2);
console.log("gender: " + (gender === 1 ? "male" : "female"));

const workLoad = 10 * (getRandomInt(4) + 1);
console.log("workLoad=" + workLoad);


function generatePersons(dtoIn){
    /*
    const dtoIn = {
    count: 50,
    age: {
        min: 19,
        max: 35
    }
    }
    
    */
    //dtoIn.age.min
    //dtoIn.count
}







