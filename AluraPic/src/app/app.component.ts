import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Photo } from './photos/photo/photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  photos: Photo[] = [];

  constructor(http: HttpClient) {
    http.get<Photo[]>('http://localhost:3001/').subscribe((photos) => {
      console.log(photos);
    });
  }
}
