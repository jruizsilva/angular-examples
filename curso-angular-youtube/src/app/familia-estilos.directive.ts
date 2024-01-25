import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFamiliaEstilos]',
  standalone: true,
})
export class FamiliaEstilosDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.textTransform = 'uppercase';
    this.element.nativeElement.style.textDecoration = 'underline';
  }
}
