import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { PhotosComponent } from './photos-list/photos/photos.component';
import { FilterByDescription } from './photos-list/filter-by-description.pipe';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotosListComponent,
    PhotosFormComponent,
    PhotosComponent,
    FilterByDescription
  ],
  imports: [CommonModule, HttpClientModule],
})
export class PhotosModule {}
