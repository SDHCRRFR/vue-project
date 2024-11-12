# tablede--

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

# Customize configuration

2. Pour mettre en place le projet voici ce que nous devons absolument faire messieurs: 

###### ------------------------------------------------------------------------>
###### ------------------------------------------------------------------->

### 1. Développer la partie front-end d’une application web ou web mobile en intégrant les recommandations de sécurité
    A. Maquetter une application
    B. Réaliser une interface utilisateur web statique et adaptable
    C. Développer une interface utilisateur web dynamique
    D. Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce

### 2. Développer la partie back-end d’une application web ou web mobile en intégrant les recommandations de sécurité
    A. Créer une base de données
    B. Développer les composants d’accès aux données
    C. Développer la partie back-end d’une application web ou web mobile
    D. Elaborer et mettre en œuvre des composants dans une application
    de gestion de contenu ou e-commerce

### 3. RESUME DU PROJECT
    A. Expression du besoin
    B. Persona
    C. User story
    D. Arborescence
    E. Conception graphique
    a. Zoning
    b. Wireframe
    c. Mockup
    d. Logo
    e. Créations de l’identité visuelle
    f. Maquette
5.Technique du projet
a. Workflow et environnement
B. Technologie
#### 6. Modélisation de la base de donnée
A. Modèle conceptuel des données (MCD)
B. Modèle Logique de Données (MLD)
C. Modèle physique de données (MPD)

6. Projet
   A. Structure du projet
   B. Développement de la partie back-end

1. Connexion à la base données
2. CRUD
3. Connexion
4. Sécurité

C. Développement de la parti front-end

1. Création de la partie visuel du site web
2. Requetes vers le back-end
3. Fonctionnalités
4. Css

##### --------------------------------------------------------->
##### ------------------------------------------------------------------->
See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Prettier code formatter Setup

```sh
npm run format
```

#### Compile and Hot-Reload for Development

```sh
npm run dev
```

##### Type-Check, Compile and Minify for Production

```sh
npm run build
```

###### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
    
### 1  Validation du formulaire d'inscription : 
       Je doit ajouter une validation côté client pour m'assurer que les données saisies dans le formulaire sont correctes avant de les envoyer au serveur. Je peut utiliser des bibliothèques comme VeeValidate ou créer ma propre logique de validation. 

### 2  Gestion des mots de passe : 
       M'assurez de stocker les mots de passe des utilisateurs de manière sécurisée en les hachant avant de les stocker en base de données.Je peut utiliser des bibliothèques comme bcrypt pour cela.

### 3 Formulaire de connexion : 
      Créez une page de formulaire de connexion similaire à celle de l'inscription, mais pour la connexion. Capturez les informations de connexion (nom d'utilisateur et mot de passe) et envoyez-les au serveur pour vérification.

### 4 Route pour la connexion : 
      Créez une route sur mon backend pour gérer les demandes de connexion. Cette route devrait vérifier les informations de connexion par rapport à celles stockées en base de données (après avoir haché le mot de passe). Si les informations de connexion sont correctes, générez un token d'authentification (JWT, JSON Web Token) et le renvoyez au client.

### 5 Stockage du token : 
      Côté client, stockez le token JWT dans les cookies ou dans le stockage local (localStorage) pour une utilisation ultérieure.

### 6 Protection des routes : 
      Configurez des gardiens (middleware) pour protéger les routes de mon application qui nécessitent une authentification. Ces gardiens doivent vérifier la validité du token à chaque demande et autoriser l'accès aux ressources protégées uniquement aux utilisateurs authentifiés.

### 7 Déconnexion : 
      Créez une route pour permettre aux utilisateurs de se déconnecter. Cela peut simplement impliquer de supprimer le token stocké côté client.

### 8 Interface utilisateur : 
      Mettre en place une interface utilisateur qui réagit en fonction de l'état de l'authentification. Par exemple, cachez le bouton "Connexion" lorsque l'utilisateur est déjà connecté.

### 9 Gestion des erreurs : 
      Gérez les erreurs de manière appropriée, notamment en renvoyant des messages d'erreur au client en cas d'informations de connexion incorrectes, de problème de validation, etc.

### 10 Tests : 
       Effectuez des tests pour vous assurer que tout fonctionne correctement, en particulier en ce qui concerne la sécurité de l'authentification.

### Ces étapes devraient m'aider à mettre en place un système d'authentification complet pour mon application Vue.js. Je n'oublierais pas de prendre en compte les bonnes pratiques de sécurité lors de la gestion des données d'authentification et des sessions utilisateur.