import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterick'
})
export class AsterickPipe implements PipeTransform {
  
  transform(value: string): string {
    if (value && value.length === 16) {
      const maskedValue = '************' + value.slice(12);
      return maskedValue.replace(/(.{4})/g, '$1-');
    }
    return value;
  }
}
