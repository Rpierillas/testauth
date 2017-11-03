# Pompidou

# Présentation du projet

Pompidou est un jeu sur la base d’un Livre Dont Vous Êtes le Héro.

# Objectifs
Permettre à des amateurs de Livre Dont Vous Êtes le Héro, à accéder à une version numérique leur permettant de jouer en ligne.

# Cible
Grand public.

# Personnes impliquées

Carine (Project Manager)
Romain (Back Developer)
Alexandre (Front Developer, writer)
Julien (DataBase Manager)

# Délais ...
1 Mois.

# Base de données
## Dictionnaire de données
|Code|Infos|Type|Remarques|Table|
|-|-|-|-|-|
|id|ID de l'utilisateur|number|Unique (AI)|users|
|admin|Status de l'utilisateur|bool|False by default|users|
|first_name|Prénom de l'utilisateur|string||users|
|last_name|Nom de l'utilisateur|string||users|
|email|Adresse e-mail de l'utilisateur|string|Sécurité email|users|
|nickname|Pseudo de l'utilisateur|string||users|
||||||
|id_game|ID de la partie|number|Unique (AI)|games|
|id_user|ID du créateur de la partie|number||games|
|score|Score de la partie|objet|contenu: ???|games|
|date|Date de fin de partie|date||games|
||||||
|id|ID de la scène|number|Unique (AI)|scenes|
|name|Nom de la scène|string|Unique|scenes|
|description|Description de la scène|string||scenes|
|actions|Actions à réaliser|object|de 2 à 4 actions|scenes|
|background|Background utilisé|string||scenes|
|image|Plan précis si nécéssaire|string|Empty by default|scenes|
|sound|Son en fond|string||scenes|
||||||
|id_save|ID de la sauvegarde|number|Unique (AI)|saves|
|id_user|ID de l'utilisateur|number||saves|
|id_scene|ID de la scène|number||saves|
|stats|Statistiques du joueur|objet|contenu: ???|saves|
