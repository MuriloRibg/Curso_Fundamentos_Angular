import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from '../photo/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photos-form.component.html',
  styleUrls: ['./photos-form.component.scss']
})
export class PhotosFormComponent implements OnInit {

  formPhotos!: FormGroup;
  file!: File;
  preview!: string;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formPhotos = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  upload() {
    const description = this.formPhotos.get(['description'])?.value;
    const allowComments = this.formPhotos.get(['allowComments'])?.value;
    this.photoService
      .upload(description, allowComments, this.file)
      .subscribe(() => this.router.navigate(['']))
  }

  handleFile(event: any) {
    this.file = event.target.files[0] ?? null;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(this.file);
  }
}
