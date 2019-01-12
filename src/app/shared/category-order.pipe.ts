import { Pipe, PipeTransform } from '@angular/core';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {AnonymousSubject} from 'rxjs/internal-compatibility';

@Pipe({
  name: 'categoryOrder'
})
export class CategoryOrderPipe implements PipeTransform {

  transform(value: AnonymousSubject<any>, args?: any): any {
    if (args) {
      return value.pipe(map((data) => data.filter(location => location.category.name === args)));
    }
    return value;
  }

}
