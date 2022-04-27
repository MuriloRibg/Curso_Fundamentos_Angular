import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PhotosListComponent } from './photos/photos-list/photos-list.component';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photos-list/photo-list.resolver';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(x => x.HomeModule)
  },
  {
    path: 'user/:userName',
    component: PhotosListComponent,
    resolve: { photo: PhotoListResolver },
    data: {
      title: 'Timeline'
    }
  },
  {
    path: 'p/add',
    component: PhotosFormComponent,
    data: {
      title: 'Photo Upload'
    }
  },
  {
    path: 'p/:photoId',
    component: PhotoDetailsComponent,
    data: {
      title: 'Photo Detail'
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: {
      title: 'Not Found'
    }
  },
  {
    path: '**',
    redirectTo: 'not-found'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
