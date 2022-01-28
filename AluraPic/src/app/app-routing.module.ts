import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photos-list/photo-list.resolver';

const routes: Routes = [
  {
    path: 'user/:userName',
    component: PhotosListComponent,
    resolve: { photo: PhotoListResolver },
  },
  { path: 'p/add', component: PhotosFormComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
