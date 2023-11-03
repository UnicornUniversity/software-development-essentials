let st1 = {
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

let st2 = {
    "name" : "John",
    "faculty" : "medical",
    "marks" : [4, 5, 2],
    "online" : true,
    "contacts" :
    {
        "phone" : "111-222-333",
        "email" : "mary@google.com"
    }
};

let arr1 = [st1, st2];

let arr2 = [
    {
        "name" : "Mary",
        "faculty" : "medical",
        "marks" : [4, 5, 2],
        "online" : true,
        "contacts" :
        {
            "phone" : "111-222-333",
            "email" : "mary@google.com"
        }
    },
    {
        "name" : "John",
        "faculty" : "medical",
        "marks" : [4, 5, 2],
        "online" : true,
        "contacts" :
        {
            "phone" : "111-222-333",
            "email" : "mary@google.com"
        }
    }
]

/*
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

*/


for(let i=0; i < arr1.length; i++){
    let student = arr2[i];
    console.log("student data: " + arr2[i].name + "; contacts:" + student.contacts.email);
}





