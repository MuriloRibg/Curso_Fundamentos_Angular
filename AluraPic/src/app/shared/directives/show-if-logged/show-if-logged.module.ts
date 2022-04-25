import { ShowIfLoggedDirective } from './show-if-logged.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ShowIfLoggedDirective],
  imports: [
    CommonModule
  ]
})
export class ShowIfLoggedModule { }
