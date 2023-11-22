const empList = [];

for(let i = 0; i < 10; i++){
    const emp = {
        "name" : "NM" + i,
        "age" : 50 - i
    }
    empList.push(emp);
}

printAges(empList);

function printAges(empList){
    console.log("------------")     
    for(let i = 0; i < empList.length; i++){
        console.log(empList[i].age)               
    }
}


//console.log(empList[0].age);
//console.log(empList[1].age);

function sort(empList){
    for(let outer = 0; outer < empList.length; outer++){
        for(let i = outer + 1; i < empList.length; i++){
            let emp1 = empList[i];
            let emp2 = empList[outer];
            if (emp1.age < emp2.age){
                const v = empList[i];
                empList[i] = empList[outer];
                empList[outer] = v;
            }            
        }
    }      
    return empList;
}

const empListSorted = sort(empList);
printAges(empListSorted);



