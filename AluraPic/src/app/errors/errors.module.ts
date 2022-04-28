import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrosHandler } from './global-erros-handler/global-erros-handler';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrosHandler //substituindo o erro padrão do navegador
    }
  ]
})
export class ErrorsModule { }
