//Liste de prix & tri dans la liste pour chercher la valeur max ou min de cette meme liste//
const prix=[1, 39, 25, 111, 112, 300, 5, 67];
let max= prix [0];//Avant la premiere boucle le prix max est 1
for (let i=0; i<prix.length; i++) //Apres chaque itteration de la boucle ca passe a 39 25 ...
{
  if (max<prix[i])
  {                 
    max=prix[i]
  }
}
console.log(max) //Le resultat final de ce programme est de 300 car c'est la plus grande valeur.
/*Si l'on avait change par min le resultat serait de 1 .
Mais il y aurait seulement qu'une seule itteration car c'est la premiere valeur*/