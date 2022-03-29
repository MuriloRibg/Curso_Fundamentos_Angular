import { CoreModule } from './../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotosListModule } from './photos-list/photos-list.module';
import { PhotosFormModule } from './photos-form/photos-form.module';
import { PhotoModule } from './photo/photo.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    PhotoModule,
    PhotosFormModule,
    PhotosListModule,
    RouterModule,
    DarkenOnHoverModule,
  ],
})
export class PhotosModule {}
