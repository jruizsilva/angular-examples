import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estados',
})
export class EstadosPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    const text = value === 0 ? 'pending' : 'completed';
    return text;
  }
}
