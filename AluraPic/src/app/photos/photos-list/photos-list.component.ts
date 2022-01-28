import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.scss'],
})
export class PhotosListComponent implements OnInit {
  photos: Photo[] = [];
  filter: string = '';

  //O constructor é destinado a injeção de dependência
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) {}

  //Qualquer inicialização posterior é feita no ngOnInit
  ngOnInit(): void {
    //pegando os parametros da url
    const userName = this.activatedRoute.snapshot.params['userName'];

    this.photoService.listFromUser(userName).subscribe((photos) => {
      this.photos = photos;
    });
  }

}
