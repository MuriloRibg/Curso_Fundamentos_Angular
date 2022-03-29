import { PhotoModule } from './../photo/photo.module';
import { RouterModule } from '@angular/router';
import { VmessageModule } from './../../shared/components/vmessage/vmessage.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhotosFormComponent } from './photos-form.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImmediateClickModule } from 'src/app/shared/directives/immediate-click/immediate-click.module';

@NgModule({
  declarations: [PhotosFormComponent],
  imports: [CommonModule, ReactiveFormsModule, VmessageModule, FormsModule, RouterModule, PhotoModule, ImmediateClickModule],
  exports: [PhotosFormComponent]
})
export class PhotosFormModule {}
