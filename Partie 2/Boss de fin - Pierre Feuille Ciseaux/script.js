
var rand1 = Math.floor(Math.random()*(1 - 4) + 3)
var rand2 = Math.floor(Math.random()*(1 - 4) + 3)
var rand3 = Math.floor(Math.random()*(1 - 4) + 3)
const result = document.querySelector('#result')
  console.log(rand1);
    console.log(rand2);
      console.log(rand3);
function Pierre(ran1) {
  var rand1 = Math.floor(Math.random()*(1 - 4) + 3)
  if (rand1 == 0) {rand1 = "EGALITE : " + "Le PC à fait pierre, Vous aussi !" }
  if (rand1 == 1) { rand1="PERDU :( : " + "Le PC à fait feuille, Vous avez perdu"}
  if (rand1 == 2) { rand1="GG ! : " +"Le PC à fait ciseaux, Vous avez gagné !!!"}
  else {
    'nothing men'
  }
      result.textContent = rand1;
return ran1
}
  function Feuille(ran2) {
    var rand2 = Math.floor(Math.random()*(1 - 4) + 3)
    if (rand2 == 0) {rand2 = "EGALITE : " + "Le PC à fait feuille, Vous aussi !"  }
    if (rand2 == 1) { rand2="PERDU :( : " + "Le PC à fait ciseaux, Vous avez perdu" }
    if (rand2 == 2) { rand2="GG ! : " +"Le PC à fait pierre, Vous avez gagné !!!"}
    else {
      'nothing men'
    }
      result.textContent = rand2;
  return ran2;
}
    function Ciseaux(ran3) {
      var rand3 = Math.floor(Math.random()*(1 - 4) + 3)
      if (rand3 == 0) {rand3 = "EGALITE : " + "Le PC à fait ciseaux, Vous aussi !"  }
      if (rand3 == 1) { rand3="PERDU :( : " + "Le PC à fait pierre, Vous avez perdu" }
      if (rand3 == 2) { rand3="GG ! : " +"Le PC à fait feuille, Vous avez gagné !!!"}
      else {
        'nothing men'
      }
        result.textContent = rand3;
    return ran3;
}
var click = document.querySelector('#partie')
var click = 0;
onclick=function () {
  click=click +1 ;partie.textContent = "Tu as joué " + click + " parties";
}
