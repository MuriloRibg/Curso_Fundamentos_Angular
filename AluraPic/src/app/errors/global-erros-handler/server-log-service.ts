import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Serverlog } from './server-log';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';

const API = environment.serverLog;

@Injectable({ providedIn: 'root' })
export class ServerLogService {
  constructor(private http: HttpClient) {}

  log(log: Serverlog): Observable<any> {
    return this.http.post(`${API}/infra/log`, { log });
  }
}
