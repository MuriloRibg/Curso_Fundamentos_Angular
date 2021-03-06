import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';

import { environment } from 'src/environments/environment.prod';
import { PhotoComment } from './photo.comment';
import { Photo } from './photo';

const API = environment.api;

@Injectable({ providedIn: `root` }) //dando acesso a todos os componentes da minha apricação
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(API + '/foto');
  }

  listFromUserPaginated(userName: string, page: number): Observable<Photo[]> {
    const params = new HttpParams().append('page', page.toString());

    return this.http.get<Photo[]>(API + '/' + userName + '/foto', { params });
  }

  upload(
    description: string,
    allowComments: boolean,
    file: File
  ): Observable<any> {
    const formData = new FormData();
    formData.append('description', description);
    formData.append('allowComments', allowComments ? 'true' : 'false');
    formData.append('imageFile', file);

    return this.http.post(API + '/photos/upload', formData);
  }

  findById(photoId: number): Observable<Photo> {
    return this.http.get<Photo>(`${API}/foto/${photoId}`);
  }

  getComments(photoId: number): Observable<PhotoComment[]> {
    return this.http.get<PhotoComment[]>(`${API}/photos/${photoId}/comments`);
  }

  addCommment(photoId: Number, commentText: string) {
    return this.http.post(`${API}/photos/${photoId}/comments`, { commentText });
  }

  removePhoto(photoId: number): Observable<any> {
    return this.http.delete(`${API}/photos/${photoId}`);
  }

  like(photoId: number): Observable<boolean> {
    return this.http
      .post(`${API}/photo/${photoId}/like`, {}, { observe: 'response' })
      .pipe(
        map((res) => true),
        catchError((error) =>
          error.status == '304' ? of(false) : throwError(error)
        )
      );
  }
}
