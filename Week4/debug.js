let st = {
    "name" : "Mary",
    "faculty" : "medical",
    "marks" : [4, 5, 2],
    "online" : true,
    "contacts" :
    {
        "phone" : "111-222-333",
        "email" : "mary@google.com"
    }
};

console.log(
    "Student name=" + st.name 
    + "; faculty=" + st["faculty"]
    + "; is online student? > " + (st.online ? "yes" : "no")
    + "; marks: " + st.marks);

console.log("Contacts of " + st.name  + ":"
    + "phone: " + st.contacts.phone
    + "; email: " + st["contacts"]["email"]);

//find maximum
let maxMark = 0;
for(let i = 0; i < st.marks.length; i++){
    if (maxMark < st.marks[i]){
        maxMark = st.marks[i];
    }
}

console.log("Max mark of Mary = " + maxMark);

let minMark = 100;
for(let i = 0; i < st.marks.length; i++){
    if (minMark > st.marks[i]){
        minMark = st.marks[i];
    }
}

console.log("Min mark of Mary = " + minMark);






