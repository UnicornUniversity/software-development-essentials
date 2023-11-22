const MIN_FLOOR = 0;
const MAX_FLOOR = 4;

let currentFloor = MIN_FLOOR;

function up(){
    currentFloor++;
    if (currentFloor > MAX_FLOOR){
        currentFloor = MAX_FLOOR;
    }
    report();
}

function down(){
    currentFloor--;
    if (currentFloor < MIN_FLOOR){
        currentFloor = MIN_FLOOR;
    }
    report();
}

function report(){
    console.log(currentFloor);
}

function elevatorRoutines(inp){
    for(let i = 0; i < inp.length; i++){
       if (inp[i] === "U"){
        up();
       }else{
        down();
       }
    }
}

elevatorRoutines(["U", "U", "U", "D"])

