# Étapes à suivre :

Étape 0 : git clone https://github.com/ibrahimelmejor/realWorldFront.git

Étaoe 1 : cd TP_JXC

Étape 2 : npm install

Étape 3 : npm start

Étape 4 : go to localhost:4200

# Taches effectuées:

## Composant Auto-completion de l'input tag:

1. Pour faire cette tache nous avons commencé par supprimer tous les tags vides de la liste des tags poppulaires.

2. Après nous avons utilisé le composant mat-autocomplete de la librairie material dans l'html de notre composant "editor".

3. Ensuite dans la partie typescript du composant "editor" nous avons utilisé le service "tagService" pour extraire les tags populaires qui existent déjà, après nous les avons relié avec les <mat-option> de notre composant mat-autocomplete en utilisant le one way binding.

4. Finalement nous avons utilisé le filtre async dans le html de notre composant "editor" pour filtrer les options en se basant sur ce que l'utilisateur a saisi.

## Composant de filtre des articles :

Nous avons ajouté la fonctionnalité de rechercher dans les articles avec:
  1. title
  2. slug
  3. description
  4. body
  5. tag
  6. author
 
Création de pipe dans le même module que le composant qui l'utilise.

ici dans le module "shared" avec

### $ ng g pipe shared/article-helpers/articleSearch 
étant à la racine du projet

- après avoir ajouter l'input pour la recherche

- création de la variable pour le biding bidirectionnelle.

Utilisation du pipe dans le composant article, pour cela nous avons défini: 
articleSearch: pour le nom du pipe.
title : la propriété sur la quelle se fera la recherche.
searchArticleName: l'élément recherchant

### ajouter un champ limite pour la recherche efficace:

Nous avons la possibilité de saisir le nombre d'articles sur lequel nous effectuons notre recherche.

## Composant DataView:
### Utilisation de primeng
#### npm install primeng --save
#### npm install primeicons --save
Nous avons utilisé le composant primeng qui nous permet de faire la recherche affichage en grille ou en liste.
## Composant upload-file
Le composant prend en charge la chargement d'une image et de son affichage automatiquement. Nous avons pensé à ajouter ce composant pour permetre d'ajouter une photo de profil à la création d'un nouveau compte par exemple. Pour bien profiter du concept de la réutilisation du composant nous avons aussi l'idée d'associer des images à une article dès sa cration. Ce composant nous a permis également de mettre en oeuvre concrètemet le concept du binding bi-directionnel. ce composant est très simple en utlisant des balises html de base et typescript.
## Composant map
Nous avons créé ce composant map, à la base, pour pouvoir choisir une position à la création d'un article et cela en sélactionnant une position à partir d'une map. Pour y arriver nous avons utilisé leaflet. <br> Leaflet est la principale bibliothèque JavaScript open source pour les cartes interactives adaptées aux mobiles. Pesant à peine 39 Ko de JS , il possède toutes les fonctionnalités de cartographie dont la plupart des développeurs ont besoin 
## Déploiement du projet
Dans le but d'avoir une application de bout en bout, Nous avons déployé notre projet sur les VM de l'istic celon les étapes suivantes:<br>
+ Création d'une Machine virtuel à l'istic : La connexion à la VM se fait par VPN et SSH.
+ Achat du nom de domaine koukousite.fr
+ création du sous-domaine https://webproject.koukousite.fr
+ génération des fichier de production du front de notre application (ng build --prod)
+ création du serveur nginx et sa configuration pour trouver les fichier de production
+ Lancement du back de l'application en arriere plan pour pouvoir y accéder meme si nous ne somme pas connecté à la machine virtuelle.
+ Configuration du serveur nginx pour écouter le serveur sur le bon port et transmetre les requetes au bon endroit
+ mise en place d'un certificat pour une connexion sécurisé en HTTPS avec l'outils Certbot
+ Ci-dessous le fichier de configuration nginx

```
server {

    server_name webproject.koukousite.fr;

    location / {

    root /var/www/monsite;
}
location /api {
proxy_pass http://localhost:3000;
}

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/webproject.koukousite.fr/fullchain.pem; # managed b>    ssl_certificate_key /etc/letsencrypt/live/webproject.koukousite.fr/privkey.pem; # managed>    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = webproject.koukousite.fr) {
        return 301 https://$host$request_uri;
    } # managed by Certbot



    server_name webproject.koukousite.fr;
listen 80;
    return 404; # managed by Certbot


}
```





