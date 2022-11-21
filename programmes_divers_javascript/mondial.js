//Produit cartesien.

const GroupeA =['France',
'Tunisie',
'Australie',
'Danemark'];//Variables du groupe A.
const GroupeB = ['Angleterre',
'Espagne',
'Italie',
'Allemagne']; //Variables du groupe B.

for (MatchGroupeA of GroupeA) // Pour la fonction qui sert a affronter le groupe A.
{
    for(MatchGroupeB of GroupeB)//Pour la fonction qui sert a affronter le groupe B.
    {
        console.log(MatchGroupeA, MatchGroupeB);//affiche les 2 fonctions.
    }

}