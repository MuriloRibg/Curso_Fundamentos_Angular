import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alert, AlertType } from './alert';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  alertSubject: Subject<Alert> = new Subject<Alert>();
  keepAfterRouteChange = false;

  constructor(router: Router) {
    router.events.subscribe((event) => {
      event instanceof NavigationStart
        ? this.keepAfterRouteChange
          ? (this.keepAfterRouteChange = false)
          : this.clear()
        : null;
    });
  }

  private alert(
    alertType: AlertType,
    message: string,
    keepAfterRouteChange: boolean
  ): void {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.alertSubject.next(new Alert(alertType, message));
  }

  sucesse(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.SUCCESS, message, keepAfterRouteChange);
  }

  warning(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.WARNING, message, keepAfterRouteChange);
  }

  danger(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.DANGER, message, keepAfterRouteChange);
  }

  info(message: string, keepAfterRouteChange: boolean = false) {
    this.alert(AlertType.DANGER, message, keepAfterRouteChange);
  }

  getAlert(): Observable<Alert> {
    return this.alertSubject.asObservable();
  }

  clear() {
    this.alertSubject.closed;
  }
}
