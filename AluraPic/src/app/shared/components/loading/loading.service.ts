import { LoadingType } from './loading-type';
import { Injectable } from '@angular/core';
import { startWith, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loadingSubject = new Subject<LoadingType>();

  constructor() {}

  getLoading() {
    return this.loadingSubject.asObservable().pipe(startWith(LoadingType.STOPPED));
  }

  start() {
    this.loadingSubject.next(LoadingType.LOADING);
  }

  stop() {
    this.loadingSubject.next(LoadingType.STOPPED);
  }
}
