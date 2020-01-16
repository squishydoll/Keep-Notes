import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: string, limit = 35): any {
    if (!value) return null;
    if (value.length > limit) {
      return value.slice(0, limit) + '...';
    }
    return value;
  }
}
