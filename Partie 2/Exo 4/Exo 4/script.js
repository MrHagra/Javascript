function Addition(nb) {
       //fait des trucs avec le bidule que je stocke dans un resultat
       return nb + 10
   }

   function Multiplication(nb) {
       //fait des trucs avec le machin que je stocke dans un resultat2

       return nb * 4
   }
   var a = Number(prompt("Entrer une valeur"))
   alert(Multiplication(Addition(a)));
