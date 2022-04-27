import { LoadingService } from './loading.service';
import { Observable, map } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  loading$!: Observable<string>;

  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    this.loading$ = this.loadingService
      .getLoading()
      .pipe(map((loadType) => loadType.valueOf()));
  }
}
