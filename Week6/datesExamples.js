//const birthday = new Date(1985, 3, 12);

//console.log(birthday);

//"Date of birth (DD-MM-YYYY)"
//27-11-1984

//const birthday2 = new Date("Fri Apr 12 1985");
//console.log(birthday2.getFullYear());

//ISO
//JS native

//Date
//Date Time

//ISO Date YYYY-MM-DD
const birthday2 = new Date("1984-11-27");
console.log("birthday (local) = " +  birthday2);
console.log("birthday (ISO) = " +  birthday2.toISOString());
console.log("birthday (UTC) = " +  birthday2.toUTCString());
console.log("year = " +  birthday2.getFullYear());
console.log("month = " +  birthday2.getMonth());
console.log("day = " +  birthday2.getDay());

//ISO Date Time YYYY-MM-DDTHH:MM:SSZ
const dtTime = new Date("1990-04-19T13:10:40Z");
console.log("dtTime = " +  dtTime.toISOString());

//JS "Native" Short Date MM/DD/YYYY
const dtTime2 = new Date("1991/11/07");
console.log("dtTime2 = " +  dtTime2);

//JS "Native" Long Date MMM DD YYYY
const dtTime3 = new Date("JAN 15 1992");
console.log("dtTime3 = " +  dtTime3);
const dtTime4 = new Date("January 20 1995");
console.log("dtTime4 = " +  dtTime4);

const dtTime5 = new Date("1380/11/07");
console.log("dtTime5 = " +  dtTime5);

const dtTime6 = new Date("1971/01/01");
console.log("dtTime6 = " +  dtTime6);

const dtTime7 = new Date(1971, 11, 7);
console.log("dtTime7 = " +  dtTime7);





