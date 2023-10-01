import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fromObject'
})
export class FromObjectPipe implements PipeTransform {

  transform<T>(value: T): any[] {
    if (!value)
      return [];
    const arr = Array.from(Object.entries(value), (val) => ({ key: val[0], value: val[1] }));
    return arr;
  }

}
