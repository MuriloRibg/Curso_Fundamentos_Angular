import { DarkenOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FilterByDescription } from './filter-by-description.pipe';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { PhotosListComponent } from './photos-list.component';
import { PhotoModule } from './../photo/photo.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    PhotosListComponent,
    LoadButtonComponent,
    PhotosComponent,
    FilterByDescription,
    SearchComponent,
  ],
  imports: [CommonModule, PhotoModule, DarkenOnHoverModule  ]
})
export class PhotosListModule {}