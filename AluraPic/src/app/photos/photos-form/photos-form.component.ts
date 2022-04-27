import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { finalize } from 'rxjs';

import { AlertService } from './../../shared/components/alert/alert.service';
import { PhotoService } from '../photo/photo.service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photos-form.component.html',
  styleUrls: ['./photos-form.component.scss'],
})
export class PhotosFormComponent implements OnInit {
  formPhotos!: FormGroup;
  file!: File;
  preview!: string;
  percentDone = 0;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.formPhotos = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload() {
    const description = this.formPhotos.get(['description'])?.value;
    const allowComments = this.formPhotos.get(['allowComments'])?.value;
    this.photoService
      .upload(description, allowComments, this.file)
      .pipe(
        finalize(() =>
          this.router.navigate(['/user', this.userService.getUserName()])
        )
      )
      .subscribe(
        (event: HttpEvent<any>) => {
          if (event.type == HttpEventType.UploadProgress) {
            this.percentDone = Math.round(
              (100 * event.loaded) / (event.total ?? 1)
            );
          } else if (event instanceof HttpResponse) {
            this.alertService.successe('Upload complete', true);
          }
        },
        (erro: Error) => {
          this.alertService.danger(erro.message);
        }
      );
  }

  handleFile(event: any) {
    this.file = event.target.files[0] ?? null;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(this.file);
  }
}
