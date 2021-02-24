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






