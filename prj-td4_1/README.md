# Application de gestion de projets : Boards


Board est une application qui permet la gestion de développeurs, de projets et des stories au sein d'un projet.


Récupération du projet
git clone https://github.com/Hizooren/ember-tds.git


Ember
Ember est un framework open-source JavaScript qui s'appuie sur une architecture de type MVC
(modèle-vue-contrôleur). Il permet aux développeurs de créer une application web monopage, soit 
une application qui ne nécessite pas de rafraichissement de la page. 


## Installation

```npm install -g ember-cli```


Il faut également install Bower car le projet utilise un composant appelé semantic-ui-calendar : 

```npm install -g bower```


De plus il faudra installer les modules manquants dans le répertoire du projet:

```npm install```

```bower install```


### MongoDB
MongoDB est un système de gestion de base de données. Il permet de créer des collections d'objet et de les gérer.
#### Installer MongoDB sous Windows :

1. Creer le fichier : launcher.bat

```@echo off
cd "C:\Program Files\MongoDB\Server\4.0\bin"
start mongod
ping 127.0.0.1 -n 10 > nul
start mongo

cd "C:\restheart"
start java -jar -Dfile.Encoding=UTF-8 restheart.jar

exit
```

2. Télécharger restheart.jar 

https://github.com/SoftInstigate/restheart/releases

Note: Mettre le fichier au chemin indiqué dans le fichier launcher : "C:\restheart"

3. Télécharger et installer MongoDB

https://www.mongodb.com/download-center#community

4. Executer launcher.bat

#### Créer une base de donnnées (ici boards):

```use boards```

#### Créer les collections utiles :

```
bd.createCollection('developers', {})
	bd.createCollection('stories', {})
	bd.createCollection('projects', {})
	bd.createCollection('tags', {})
	bd.createCollection('steps', {})
	bd.createCollection('tasks', {})
 ```
 
### Installer Semantic-UI

```ember install semantic-ui-ember```

Lancer le serveur ember dans le répertoire du projet : 

```ember serve```

Se rendre sur la page :

```127.0.0.1:4200```

## Utilisation de l'application

* Créer, modifier et supprimer des développeurs.
* Créer, modifier, supprimer des projets reliés à un développeur.
* Créer, modifier, supprimer des stories reliées à un projet.
* Créer des tags afin liés à des stories.

## Collaborateurs

Ce projet s'est fait à l'aide de Jean-Christophe HERON.
Lien de son Github : 
https://github.com/jcheron

## Version

Cette version est la première et pourrait être complétée par diverses améliorations.

## Auteur

Ce projet a été fait par moi-même afin de mettre en avant différentes fonctionnalités d'Ember en lien avec le modèle.
