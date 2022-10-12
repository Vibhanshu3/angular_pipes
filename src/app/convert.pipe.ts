import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUint: string): any {
    if(!value)
      return '';
    switch(targetUint) {
      case 'km':
        return value* 1.6;
      case 'm':
        return value* 1.6 * 1000;
      default:
        return new Error('Target unit not supported');
    }
  }

}
