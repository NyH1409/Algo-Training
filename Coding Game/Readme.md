# Enoncé du problème
## Règles
Écrivez un programme qui affiche la température la plus proche de 0 parmi les données d'entrée. Si deux nombres sont aussi proches de zéro, alors l'entier positif sera considéré comme étant le plus proche de zéro (par exemple, si les températures sont -5 et 5, alors afficher 5).
## Entrées du jeu
Votre programme doit lire les données depuis l'entrée standard et écrire le résultat sur la sortie standard.
Entrée
- Ligne 1 : Le nombre N de températures à analyser.

- Ligne 2 : Une chaine de caractères contenant les N températures exprimées sous la forme de nombres entiers allant de -273 à 5526

## Sortie
Affichez 0 (zéro) si aucune température n'est fournie. Sinon, affichez la température la plus proche de 0
## Contraintes
0 ≤ N < 10000
# Exemple
## Entrée
5
1 -2 -8 4 5
## Sortie
1


# Manipulation pour l'éxécution du code 
- Créer un fichier package.json
```sh
npm init -y
```
- Ouvrir le fichier package.json et y ajouter
```sh
"type" : "module",
```
- Pour le test unitaire (en cours de développement), il faut installer mocha et chai
```sh
npm i -D mocha
npm i -D chai
```
