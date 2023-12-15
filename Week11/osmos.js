class Molecule {
  constructor(name, x, y, value) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.value = value;
    this.consumed = false;
  }
}

function getCountNotConsumed(allMolecules){
    let cnt = 0;
    for (let i = 0; i < allMolecules.length; i++) {
        if (!allMolecules[i].consumed) cnt++; 
    }
    return cnt;
}

function consumeOthers(myMol, allMols) {
  let round = 0;
  let canContinue = true;
  let myMolecule = myMol;
  let allMolecules = allMols;

  while (canContinue && getCountNotConsumed(allMolecules) > 0) {
    round++;
    console.log("------------");
    console.log("Round " + round);
    console.log("------------");

    let bestMolecule = null;
    let maxProfit = 0;

    for (let i = 0; i < allMolecules.length; i++) {
      let currentMol = allMolecules[i];
      if (currentMol.consumed) continue;
      let distance =
        Math.abs(currentMol.x - myMolecule.x) +
        Math.abs(currentMol.y - myMolecule.y);
      let canConsume = myMolecule.value > currentMol.value + distance;
      let profit = currentMol.value - distance;
      console.log(
        "for " +
          currentMol.name +
          " distance=" +
          distance +
          "; can_consume? " +
          canConsume +
          "; profit=" +
          profit
      );
      if (canConsume && (getCountNotConsumed(allMolecules) === 1 || profit > maxProfit)) {
        bestMolecule = currentMol;
        maxProfit = profit;   
        console.log(
          "Best molecule. Name:" +
            bestMolecule.name +
            "; Profit:" +
            maxProfit +
            "; mol index: " +
            i
        );
      }
    }

    if (bestMolecule == null) {
      console.log("Can't find any molecule to consume");
      canContinue = false;
    } else {
      console.log("go eat " + bestMolecule.name);
      myMol.x = bestMolecule.x;
      myMol.y = bestMolecule.y;
      myMol.value = myMol.value + maxProfit;
      bestMolecule.consumed = true;
      console.log(
        "My x:" + myMol.x + "; y:" + myMol.y + "; value:" + myMol.value
      );
      console.log("Molecules left:");
      if (getCountNotConsumed(allMolecules) > 0) {
        for (let i = 0; i < allMolecules.length; i++) {
          const m = allMolecules[i];
          if (!m.consumed) {
            console.log(m.name);
          }
        }
      } else {
        console.log("none");
      }
    }
  }
}

const myMolecule = new Molecule("blue", 1, 1, 7);

const allMolecules = [
  new Molecule("green", 3, 1, 3),
  new Molecule("yellow", 2, 2, 4),
  new Molecule("orange", 3, 4, 5),
  new Molecule("red", 2, 5, 8),
];

consumeOthers(myMolecule, allMolecules);


