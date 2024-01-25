import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primerPipe',
  standalone: true,
})
export class PrimerPipePipe implements PipeTransform {
  transform(value: string): string {
    return value.toLowerCase();
  }
}
