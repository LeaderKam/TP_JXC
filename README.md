# Steps to reproduce :

Step 0 : git clone https://github.com/ibrahimelmejor/realWorldFront.git

Step 1 : cd realWorldFront

Step 2 : npm install

Step 3 : npm start

Step 4 : go to localhost:4200

# FILTER OF ARTICLE :


pipe creation in the same module which will use it.

here shared module "shared" with

### $ ng g pipe shared/article-helpers/articleSearch 
being at the root of the project

- after add input for searching

- variable creation for two way binding

use of pipe in article composant
articleSearch: for the pipe name 
title : is the article's property on which we will search
searchArticleName: is the typing text that appear in the input field

articleSearch:'title':searchArticleName"


### adding of limit field for effiscient search

# Steps to reproduce :

Step 0 : git clone https://github.com/ibrahimelmejor/realWorldFront.git

Step 1 : cd realWorldFront

Step 2 : npm install

Step 3 : npm start

Step 4 : go to localhost:4200

# FILTER OF ARTICLE :


pipe creation in the same module which will use it.

here shared module "shared" with

### $ ng g pipe shared/article-helpers/articleSearch 
being at the root of the project

- after add input for searching

- variable creation for two way binding

use of pipe in article composant
articleSearch: for the pipe name 
title : is the article's property on which we will search
searchArticleName: is the typing text that appear in the input field

articleSearch:'title':searchArticleName"


### adding of limit field for effiscient search


# Utilisation de primeng

#### npm install primeng --save
#### npm install primeicons --save

ajout de css dans home.component.css
.page{
  padding-left: 10%;
  padding-right: 10%;
}


dans angular.json 
partie "style"
"node_modules/primeicons/primeicons.css",
"node_modules/primeng/resources/themes/bootstrap4-light-blue/theme.css",
"node_modules/primeng/resources/primeng.min.css"


importation des modules dans app.amodule.ts

import {DataViewModule} from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {PanelModule} from 'primeng/panel';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {RippleModule} from 'primeng/ripple';


pour le composant article-list

article-list.component.ts

this.sortOptions = [
      {
        label: 'Title',
        value: 'tittle'
      },
      {
        label: 'Slug',
        value: 'slug'
      },
      {
        label: 'Description',
        value: 'description'
      },
      {
        label: 'Body',
        value: 'body'
      },
    ];



onToggleFavorite(favorited: boolean) {
    this.products['favorited'] = favorited;

    if (favorited) {
      this.products['favoritesCount']++;
    } else {
      this.products['favoritesCount']--;
    }
  }

et dans le fichier html de ce composant 
<div style="display: inline-block">
            <app-favorite-button
              [article]="product"
              (toggle)="onToggleFavorite($event)"
              class="pull-xs-right">
              {{product.favoritesCount}}
            </app-favorite-button>
          </div>
          


et pour le comptage des favories
<span>Read more...</span>
          <br>
          <div style="display: inline-block">
            <app-favorite-button
              [article]="product"
              (toggle)="onToggleFavorite($event)"
              class="pull-xs-right">
              {{product.favoritesCount}}
            </app-favorite-button>
          </div>


shared.module.ts

import {DropdownModule} from 'primeng/dropdown';
import {DataViewModule} from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';

# Composant umpload-file
Le composant prend en charge la chargement d'une image et de son affichage automatiquement. Nous avons pensé à ajouter ce composant pour permetre d'ajouter une photo de profil à la création d'un nouveau compte par exemple. Pour bien profiter du concept de la réutilisation du composant nous avons aussi l'idée d'associer des images à une article dès sa cration. Ce composant nous a permis également de mettre en oeuvre concrètemet le concept du binding bi-directionnel. ce composant est très simple en utlisant des balises html de base et type script.
# Composant map
Nous avons créé ce composant map, à la base, pour pouvoir choisir une position à la création d'un article et cela en sélactionnant une position à partir d'une map. Pour y arriver nous avons utilisé leaflet. <br> Leaflet est la principale bibliothèque JavaScript open source pour les cartes interactives adaptées aux mobiles. Pesant à peine 39 Ko de JS , il possède toutes les fonctionnalités de cartographie dont la plupart des développeurs ont besoin 
# Déploiement du projet
Dans le but d'avoir une application de bout en bout, Nous avons déployé notre projet sur les VM de l'istic celon les étapes suivantes:<br>
+ Création d'une Machine virtuel à l'istic : La connexion à la VM se fait par VPN et SSH.
+ Achat du nom de domaine koukousite.fr
+ création du sous-domaine https://webproject.koukousite.fr
+ génération des fichier de production du front de notre application (ng build --prod)
+ création du serveur nginx et sa configuration pour trouver les fichier de production
+ Lancement du back de l'application en arriere plan pour pouvoir y accéder meme si nous ne somme pas connecté à la machine virtuelle.
+ Configuration du serveur nginx pour écouter le serveur sur le bon port et transmetre les requetes au bon endroit
+ mise en place d'un certificat pour une connexion sécurisé en HTTPS 
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







