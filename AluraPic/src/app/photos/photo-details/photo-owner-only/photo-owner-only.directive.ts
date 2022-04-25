import { OnInit } from '@angular/core';
import { UserService } from './../../../core/user/user.service';
import { ElementRef, Renderer2 } from '@angular/core';
import { Photo } from './../../photo/photo';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[photoOwnerOnly]',
})
export class PhotoOwnerOnlyDirective implements OnInit {
  @Input() ownedPhoto!: Photo;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe((user) => {
      // !user || user.id != this.ownedPhoto.id ?
      //   this.renderer.setStyle(this.element.nativeElement, 'display', 'none') : null;
    });
  }
}
