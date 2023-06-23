Ce répertoire contient le code de l'application HRnet convertie en React. Le composant choisi pour être converti est la table de données nommée **Datatable**. C'est sur ce composant que porte mon projet. J'ai aussi écrit un composant menu déroulant en React nommé **Select**. Je gère aussi les modales sous forme sommaire de composant React, cependant le sélectionneur de date n'est pas un composant React, mais celui fourni par HTML. Tout le code du composant **Datatable** est placé dans le repertoire /src/lib afin de pouvoir être compilé en _mode production_ et publié sur [npmjs](https://npmjs.com)[npmjs](https://npmjs.com) en tant que package 'public' nommé **sviosdi-datatable**.
<br>L'application HRnet dans ce répertoire ne peut être exécutée qu'en _mode développement_.

# Exécution de l'application HRnet

Ce repertory est prévu pour publier le composant **sviosdi-datatable** sur [npmjs](https://npmjs.com). L'application HRnet ne peut être utilisée qu'en mode développement afin de tester le package avant sa publication.

Pour lancer l'application : `yarn dev`

# Publication du package sur [npmjs](https://npmjs.com)

Le package a été publié sur [npmjs](https://npmjs.com) en suivant les instructions de l'article suivant : [Publishing a React component to npm using Vite](https://tomsouthall.com/blog/publishing-react-component-using-vite).

Tout le code du composant Datatable est placé dans le dossier `src/lib` ayant à sa racine le fichier `index.js` qui exporte nominativement les composants `Datatable`, `Form`, `Sumbit` ainsi que la fonction `getModel`.

Pour chaque modification du package et nouvelle publication, il faut incrémenter le numéro de version dans le fichier `package.json`.

J'ai rajouté la ligne sur l'export du css qui n'apparaissait pas dans l'article mentionné plus haut :

```
"exports": {
        ".": {
            "import": "./dist/sviosdi-datatable.es.js",
            "require": "./dist/sviosdi-datatable.umd.js"
        },
        "./style.css": "./dist/style.css"
    }
```

## Construction du package :

La commande `yarn build` va construire le package et un dossier `/dist` est créé à la racine, prêt à être publié.

## Publication du package :

Se connecter à npmjs avec `npm login`

Puis publier le package sur npmjs avec `npm publish`
