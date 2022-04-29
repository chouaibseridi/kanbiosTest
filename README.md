Pour lancer l'application, c'est simple: 

	- ouvrir un premier terminal dans le répertoire de base (kanbiosTest)
	- lancer le serveur avec la commande : cd Api && npm i && npm start
	- ouvrir un deuxieme terminal dans le répertoire de base (kanbiosTest)
	- lancer l'application front avec la commande : cd Application && npm i && npm start 
	- l'application va se lancer dans klk instants !
	- ensuite aller sur l'adresse : http://localhost:3000
	- tester intuitivement l'application :)
	
Fonctionnalités :

	- connexion & ajout d'utilisateur via l'url : localhost:3000
	- listing et recherche des données via l'url : localhost:3000/employees
	- affichage détaillé d'une donnée via l'url : localhost:3000/employee/:id 
	- remplissage de la table employee à partir du fichier excel fourni via le button "populate"
	- suppression de toutes les données de la table employee via le button "erase data"
	- pagination 
	
Etapes de test : 

	la base de données est actuellement vide et il faudra d'abord la remplir 
	
	1 - ajouter un utilisateur via le formulaire Sign Up sur la page l'acceuil
	2 - connecter avec l'email et le password de cet utilisateur via le formulaire Login 
	3 - cliquer sur le button populate pour remplir la table employee 
	4 - tester la recherche, l'affichage detaillé de chaque employé, la pagination 
	5 - tester la suppression via le button erase data
	6 - deconnecter via le button logout
	
	
	
	
Bien à toi,

CHOAYB SERIDI
