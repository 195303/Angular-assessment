import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchVal:string, searchTxt: string ): any[] {
    if (!searchTxt || !searchVal) {
      return value;
    }

  searchTxt = searchTxt.toLowerCase();

  return value.filter((value) => {
    switch (searchVal) {
      case 'username':
        return value.username.toLowerCase().includes(searchTxt);
      case 'cardNumber':
        return value.cardnumber.toString().includes(searchTxt);
      case 'balance':
        return value.balance.toString().includes(searchTxt);
      default:
        return value;
    }
  });
}

}