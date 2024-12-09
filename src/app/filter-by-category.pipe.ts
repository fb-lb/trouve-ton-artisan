import { Pipe, PipeTransform } from '@angular/core';
import { CategoriesService } from './categories.service';

@Pipe({
  name: 'filterByCategory',
  pure: false
})
export class FilterByCategoryPipe implements PipeTransform {
  
  constructor (private categoriesService:CategoriesService) {}

  transform(allData: any[], category:string): any[] {
    if (this.categoriesService.category.value != "") {
      let filteredData = allData.filter((craftsman) => craftsman.category == category);
      return filteredData;
    } else {
      return allData;
    }
  }

}
