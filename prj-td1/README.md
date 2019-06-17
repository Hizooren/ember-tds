# Application Note et Choix de services

Ce projet a pour objectif de développer une application Note et une application de choix de services.
## Bien commencer

Récupération du projet

```git clone https://github.com/Guillaume-Lafosse/ember-tds.git```


NodeJS

Il faut installer NodeJS afin d'utiliser la commande 'npm' :

### Téléchargement de NodeJS

https://nodejs.org/en/

Ces instructions servent à indiquer les instructions afin de pouvoir lançer le projet.
### Prérequis

Avant de cloner le projet, il faudra installer Ember : 
```
 npm install -g ember-cli
```

Puis il faudra se rendre dans le répertoire d'ember, récupérer le chemin et faire :

```
set PATH=%PATH%;cheminEmber
```

### Installation

Il ne reste plus qu'à cloner le projet, puis se rendre dans le répertoire du projet et faire :

```
 npm install
```

## Lancement du projet

On peut désormais se rendre dans le répertoire du projet et faire la commande : 

```
ember serve
```

Le projet est désormais accessible à l'adresse : 

```
127.0.0.1:4200
```

## Collaborateurs

Ce projet s'est fait à l'aide de Jean-Christophe HERON.
Lien de son Github : 
https://github.com/jcheron

## Version

Cette version est la première et pourrait être complétée par diverses améliorations.

## Auteur

Ce projet a été fait par moi-même afin de mettre en avant différentes fonctionnalités d'Ember.

## Objectifs

* Créer un projet
* Créer des routes
* Créer/manipuler les templates
* Créer des classes et instancier des objets
* Mettre en oeuvre le Data-binding avec computed properties

* Créer des routes avec model
* Utiliser/créer des helpers handlebar
* Mettre en oeuvre le Data-binding
* Utiliser les tableaux

## Fonctionnalités

* Saisir une note (message textuel) et afficher le nombre de caractères restants (le message est limité à 100 caractères saisis)
* Enregistrer (pseudo enregistrement)
* Effacer le contenu
* Afficher les messages d'info (sauvegarde, modification…)
* Gérer les changements de classe CSS sur l'affichage d'info

* Sélectionner/désélectionner des services
* Calculer le montant dû
* Afficher le nombre de services sélectionnés

