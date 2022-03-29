import { CoreModule } from './../../core/core.module';
import { PhotoModule } from './../photo/photo.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoDetailsComponent } from './photo-details.component';



@NgModule({
  declarations: [
    PhotoDetailsComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    PhotoModule,
  ],
  exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule { }
