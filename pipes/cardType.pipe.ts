import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardtype'
})
export class CardtypePipe implements PipeTransform {

  transform(value: any): any[''] {
    const Digits = parseInt(value.substr(0, 2));
    if (Digits >= 50 && Digits <= 99) {
      return 'assets/MasterCard-Logo.png';
    } else if (Digits >= 10 && Digits <= 49) {
      return 'assets/Visa-Logo.jpeg';
    }
  }
}