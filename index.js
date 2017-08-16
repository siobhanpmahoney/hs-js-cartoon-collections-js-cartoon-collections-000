function dwarfRollCall(dwarves) {
  for (let i = 0; i<dwarves.length; i++) {
    dwarves[i] = `${i+1}. ${dwarves[i]}`
    }
  var dwarvesOne = "";
  for (let i = 0; i<dwarves.length; i++) {
    dwarvesOne = dwarvesOne + dwarves[i] + " ";
  }
  return dwarvesOne
}

function summonCaptainPlanet(planeteerCalls){
  for (let i=0; i<planeteerCalls.length; i++) {
    planeteerCalls[i] = `${planeteerCalls[i].toUpperCase}!`
  }
  return planeteerCalls
}

function longPlaneteerCalls(words) {
  for (let i = 0; i<words.length; i++) {
    if (words[i].length>4)
    return true;
  }
  return false;
}

function findTheCheese(foods) {
  var cheese = ["cheddar", "gouda", "camembert"];
  for (let i = 0; i<foods.length; i++) {
    if (cheese.includes(foods[i])) {
      return foods[i];
    }
  }
    return "no cheese!"
}
