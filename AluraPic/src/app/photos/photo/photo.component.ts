import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
  private _url = '';

  @Input() description = '';

  @Input() set url(url: string)  {
    this._url = url
}

get url() {
    return this._url;
}

  constructor() {}

  ngOnInit(): void {}
}
