import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], searchvalue: string): any {
    if (!value) return null;
    if (!searchvalue) return value;

    let searchVal = searchvalue.toLowerCase();
    let output = value
      .map(note => {
        return {
          id: note.id,
          title: note.title ? note.title.toLowerCase() : '',
          content: note.content ? note.content.toLowerCase() : '',
          date: note.date
        };
      })
      .filter(
        val =>
          val.title.includes(searchVal) ||
          val.content.includes(searchVal) ||
          val.date.toString().includes(searchVal)
      );
    return output;
  }
}
