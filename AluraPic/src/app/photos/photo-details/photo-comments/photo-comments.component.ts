import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoComment } from './../../photo/photo.comment';
import { Observable, tap } from 'rxjs';
import { PhotoService } from './../../photo/photo.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-comments',
  templateUrl: './photo-comments.component.html',
  styleUrls: ['./photo-comments.component.scss'],
})
export class PhotoCommentsComponent implements OnInit {
  @Input() photoId!: number;
  comments$!: Observable<PhotoComment[]>;
  formComment!: FormGroup;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.comments$ = this.photoService.getComments(this.photoId);

    this.formComment = this.formBuilder.group({
      comment: ['', Validators.maxLength(300)],
    });
  }

  save() {
    const comment = this.formComment.get('comment')?.value;
    this.photoService.addCommment(this.photoId, comment).pipe(
      switchMap(() => this.photoService.getComments(this.photoId)),
      tap(() => {
        this.formComment.reset();
      })
    );
  }
}
