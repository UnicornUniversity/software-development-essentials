let students = ["Harry Potter", "Ron Weasley"];

//returns [0; 99]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function sortingCeremony(studentName){
    const faculties = ["Gryffindor", "Ravenclaw", "Hufflepuff", "Slytherin"];

    let randomNumForHat = getRandomInt(100);
    console.log("Student name=" + studentName + "; rand num=" + randomNumForHat);

    let result;   
    
    if ((0 <= randomNumForHat) && (randomNumForHat < 25)){
        result = 0;
    } else if ((25 <= randomNumForHat) && (randomNumForHat < 50)){
        result = 1;
    } else if ((50 <= randomNumForHat) && (randomNumForHat < 75)){
        result = 2;
    } else {
        result = 3;
    }

    let facultyName = faculties[result];
    console.log("Faculty is " + facultyName);    
}

function sortingCeremony2(studentName){
    let facultyName = "";
    switch(studentName){
        case "Harry Potter":
            facultyName = "Gryffindor";
            break;
        case "Ron Weasley":
            facultyName = "Ravenclaw";
            break;    
    }
    console.log("Faculty is " + facultyName);  
}

for(let i=0; i < students.length; i++){
    let studentName = students[i];
    sortingCeremony(studentName);
    sortingCeremony2(studentName);
}