import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCategory',
  pure: false
})
export class FilterByCategoryPipe implements PipeTransform {

  transform(allData: any[], category:string): any[] {
    if (category != "") {
      let filteredData = allData.filter((craftsman) => craftsman.category == category);
      return filteredData;
    } else {
      return allData;
    }
  }

}
