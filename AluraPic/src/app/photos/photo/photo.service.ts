import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const api = 'http://localhost:3001';

@Injectable({ providedIn: `root` }) //dando acesso a todos os componentes da minha apricação
export class PhotoService {
  constructor(private http: HttpClient) {}

  listFromUser(userName: string) {
    return this.http.get<Photo[]>(api + '/');
  }
}
