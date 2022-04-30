//BattleDev Niveau 1 Mars 2020
const prompt = require("prompt-sync")();

//Saisir les entrées
let vote;
do{
    vote=+prompt("Combien de personnes vont voter? ")
    if(vote<3||vote>10000){
        console.log("Le nombre de votants doit être compris entre 3 et 10000");
    }
}while(vote<3||vote>10000)


let tableau = []
for(let i=1; i<=vote; i++){
    let choix;
    do{
        choix=prompt("choix"+i+": ")
        if(choix.length<4||choix.length>10){
            console.log("Choix invalide!");
        }
    }while(choix.length<4||choix.length>10);
    tableau.push(choix); //Stocker les couleurs saisies dans un tableau
}


//Fonction principale
let deuxCouleursLesPlusPopulaires = (tableau)=>{
    let objet = {};
    for(let i of tableau){
        if(objet.hasOwnProperty(i)){
            objet[i]++;  //Si l'élément du tableau est une propriété de l'objet, on incrémente sa valeur
        }
        else{
            objet[i]=1; //Sinon on lui attribue la valeur de 1
        }
    }
    let tab = Object.values(objet).sort((a,b)=>a-b);    //Trier les propriétés de l'objet suivant leur valeur
    let first = Object.keys(objet).filter(color => objet[color]==tab[tab.length-1])
    let second = Object.keys(objet).filter(color => objet[color]==tab[tab.length-2])
    console.log(first+" "+second);
}