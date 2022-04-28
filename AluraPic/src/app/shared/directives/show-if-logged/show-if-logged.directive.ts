import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';
import { Photo } from 'src/app/photos/photo/photo';

@Directive({
  selector: '[showIfLogged]',
})
export class ShowIfLoggedDirective {
  @Input() ownedPhoto!: Photo;

  currentDisplay!: string;

  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer2,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.currentDisplay = getComputedStyle(this.element.nativeElement).display;
    this.userService.getUser().subscribe((user: User) => {
      if (user) {
        this.renderer.setStyle(
          this.element.nativeElement,
          'display',
          this.currentDisplay
        );
        console.log("oi");
      } else {
        this.currentDisplay = getComputedStyle(
          this.element.nativeElement
        ).display;
        this.renderer.setStyle(this.element.nativeElement, 'diplay', 'none');
      }
    });
    !this.userService.isLogged() &&
      this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
  }
}
