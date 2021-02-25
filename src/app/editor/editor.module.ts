import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EditorComponent } from './editor.component';
import { EditableArticleResolver } from './editable-article-resolver.service';
import { AuthGuard } from '../core';
import { SharedModule } from '../shared';
import { EditorRoutingModule } from './editor-routing.module';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MapComponent } from '../map/map.component';

@NgModule({
  imports: [SharedModule,
    EditorRoutingModule,
    MatAutocompleteModule],
  declarations: [EditorComponent,
    MapComponent
  ],
  providers: [EditableArticleResolver]
})
export class EditorModule {}
