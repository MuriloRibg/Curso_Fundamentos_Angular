import { SigUpComponent } from './sigup/sigup.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { VmessageModule } from './../shared/components/vmessage/vmessage.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [SigninComponent, SigUpComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, VmessageModule, RouterModule],
  exports: [SigninComponent, SigUpComponent],
})
export class HomeModule {}
