const COMMANDS = {UP: 1, DOWN: -1};
const BOUND = {
  UPPER: 4,
  LOWER: 0
}

function process_elevator(command_list) {
  let floor = 0;
  for (const command of command_list) { 
    floor += command;  
    floor = Math.max(BOUND.LOWER, Math.min(floor, BOUND.UPPER));
  }
  
  return floor;
}

console.log(process_elevator([COMMANDS.UP, COMMANDS.UP, COMMANDS.UP, COMMANDS.UP, COMMANDS.UP]));
console.log(process_elevator([COMMANDS.UP, COMMANDS.DOWN, COMMANDS.UP, COMMANDS.UP]));
