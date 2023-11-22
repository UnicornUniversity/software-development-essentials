const dob = new Date(1970, 4, 12);
console.log("dob=" + dob);

const dtNow = new Date();
console.log("now=" + dtNow);

const age = dtNow.getFullYear() - dob.getFullYear();
console.log("age=" + age);







