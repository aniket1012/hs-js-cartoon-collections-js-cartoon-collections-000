function dwarfRollCall(dwarves) {
 var count = "";
 for (var i = 0; i < dwarves.length; i++) {
   count += (i+1 + ". " + dwarves[i] + " ");
 }
 return count;
}

function summonCaptainPlanet(planeteerCalls){
 var summon = [];
 planeteerCalls.forEach(function(element) {
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
 var cheese = ["cheddar", "gouda", "camembert"];
 for( var i = 0; i < foods.length; i++) {
   for( var j = 0; j < cheese.length; j++) {
     if( foods[i] === cheese[j]) {
       return cheese[j];
     }
   }
 }
 return "no cheese!";
}
