import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardnumber'
})
export class CardnumberPipe implements PipeTransform {

  transform(cardNum: any, ): any {
    if (!cardNum&& cardNum.length !== 16) {
      return '';
    }

    cardNum = cardNum.replace(/[^0-9]/g, '');

    let formattedCardNum = '';
    for (let i = 0; i < cardNum.length; i += 4) {
      formattedCardNum += cardNum.slice(i, i + 4);
      if (i + 4 < cardNum.length) {
        formattedCardNum += '-';
      }
    }

    return formattedCardNum;
}



}
