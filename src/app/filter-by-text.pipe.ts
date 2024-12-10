import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByText'
})
export class FilterByTextPipe implements PipeTransform {

  // Search on names / specialties / locations
   transform(allData: any[], inputText: string): any[] {
    inputText = inputText.toLocaleLowerCase();
    let filteredData = allData.filter(craftsman  => {
      let name: string = craftsman.name.toLowerCase();
      let specialty: string = craftsman.specialty.toLowerCase();
      let location: string = craftsman.location.toLowerCase();
      return (name.includes(inputText) || specialty.includes(inputText) || location.includes(inputText));
    })
    return filteredData;
  }
}
