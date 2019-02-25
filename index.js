function dwarfRollCall(dwarves) {
  var count = "";
  for( var i = dwarves.length/2; i < dwarves.length; i++) {
    count += (i+1 + ". " + dwarves[i] + " ");
  }
  return count; 
}

function summonCaptainPlanet(planeteerCalls){
  var summon = [];
  planeteerCalls.forEach(function(element){
    element = element.toUpperCase() + "!";
    summon.push(element);
  });
  return summon; 
}

function longPlaneteerCalls(words) {
  for( var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
  }
  return false; 
}

function findTheCheese (foods) {
  var cheese = ["cheddar", "gouda", "camembert", "swiss"];
  for (var i = 0; i < foods.length; i++) {
    for (var j = 0; j < cheese.length; j++) {
      if (foods[i] === cheese[j]) {
        return cheese[j];
      }
    }
  }
  return "no cheese!"
}





function wordsThatStartWithB(words){
  var Bwords = [];
  for ( var i = 0; i < words.length; i++) {
    if (words[i][0] === "b") {
      Bwords.push(words[i]);
    }
  }
  return Bwords;
}

wordsThatStartWithB(['bob', 'alice', 'eva']) // ['bob']
wordsThatStartWithB(['berry', 'barry', 'joe']) // ['berry', 'barry']
wordsThatStartWithB(['cher', 'david', 'james']) //  []


