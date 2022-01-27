import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoComponent } from './photo/photo.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';

@NgModule({
  declarations: [PhotoComponent, PhotosListComponent, PhotosFormComponent],
  imports: [CommonModule, HttpClientModule],
})
export class PhotosModule {}
