import { VmessageModule } from './../shared/components/vmessage/vmessage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';
import { RouterModule } from '@angular/router';
import { PhotoComponent } from './photo/photo.component';
import { HttpClientModule } from '@angular/common/http';
import { ImmediateClickModule } from '../shared/directives/immediate-click/immediate-click.module';
import { PhotoDetailsComponent } from './photo-details/photo-details.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosComponent } from './photos-list/photos/photos.component';
import { LoadButtonComponent } from './photos-list/load-button/load-button.component';
import { FilterByDescription } from './photos-list/filter-by-description.pipe';
import { SearchComponent } from './photos-list/search/search.component';
import { CardModule } from '../shared/components/card/card.module';
import { PhotoCommentsComponent } from './photo-details/photo-comments/photo-comments.component';

@NgModule({
  declarations: [
    PhotoComponent,
    PhotosFormComponent,
    PhotoDetailsComponent,
    PhotosListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent,
    PhotoCommentsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    VmessageModule,
    FormsModule,
    RouterModule,
    ImmediateClickModule,
    DarkenOnHoverModule,
    CardModule,
  ],
  exports: [
    PhotoComponent,
    PhotosFormComponent,
    PhotoDetailsComponent,
    PhotosListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchComponent,
  ],
})
export class PhotosModule {}
