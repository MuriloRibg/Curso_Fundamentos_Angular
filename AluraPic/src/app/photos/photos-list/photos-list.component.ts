import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
})
export class PhotosListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';
  hasMore: boolean = true;

  //O constructor é destinado a injeção de dependência
  constructor(private activatedRoute: ActivatedRoute) {}

  //Qualquer inicialização posterior é feita no ngOnInit
  ngOnInit(): void {
    this.photos = this.activatedRoute.snapshot.data['photo'];
  }

  load() {
    // this.photoService
    //   .listFromUserPaginated(this.userName, ++this.currentPage)
    //   .subscribe(photos => {
    //     this.filter = '';
    //     this.photos = this.photos.concat(photos);
    //     if(!photos.length) this.hasMore = false;
    //   });
  }
}
