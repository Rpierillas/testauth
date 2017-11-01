# Modèle React

Ce n'est pas une bonne pratique d'avoir `*` ou `latest` dans son `package.json`.  
Pour installer en remplaçant `*` par les numéros de version :
```
# On supprime les modules actuellement installés
rm -rf node_modules

# On sauvegarde les dépendences
npm update --save

# On sauvegarde les dépendences de dev
npm update --save-dev
```

Pour aller plus vite, un npm script permet de faire ça en une ligne : `yarn save-deps`.
