import { AlertService } from './../../shared/components/alert/alert.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';
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
    this.photoService.upload(description, allowComments, this.file).subscribe(
      () => {
        this.alertService.sucesse('Foto postada com sucesso!', true);
        this.router.navigate(['/user', this.userService.getUserName()]);
      },
      (erro: Error) => {
        this.alertService.warning(erro.message);
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
