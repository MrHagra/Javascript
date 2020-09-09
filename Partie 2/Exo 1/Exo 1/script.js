//Les variables
    //nombre
const nombre = 42
    console.log(nombre);
    //tableau
const tab = [ 2 , 5 , 6 , 7 , 9 ]
    console.log(tab);
    //chaine de caracteres
const chaine = 'ceci est une chaine de caracteres'
    console.log(chaine);
//Conditions

    //if, else if ,else

if (nombre >= 50){console.log('super moitmoit')}
else if (nombre <= 40) {console.log('peux mieux faire!')}
else { console.log("La Grande réponse")}
  //switch

var lenght = tab.length;
switch (lenght) {
    case (lenght = 10):
        console.log("il y a 10 éléments dans le tableau");
        break;
    case (lenght = 5):
        console.log("il y a 5 éléments dans le tableau");
        break;
    case (lenght = 0):
        console.log("Je ne connais pas le nombre d'éléments du tableau");
        break;
    default :
    console.log("Aucun tableau trouvé")
    break;
}
//Boucles
var compteur = 0
    //while
while (compteur < 5) {
  compteur++
  console.log("Messire, on en a gros");
}

    //for
    var result = '';
for (var i = 1; i <= lenght ; i++) {
  result = result + i
}

console.log(result);
