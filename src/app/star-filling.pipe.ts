import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starFilling'
})
export class StarFillingPipe implements PipeTransform {

  transform(stars: any[], craftsmanNote: number): any[] {
      for (let i = 0; i < stars.length; i++) {
        if (i + 1 <= craftsmanNote) {
          stars[i].fill = '100%';
        } else if (craftsmanNote - i > 0) {
          let decimal = 1 - (i + 1 - craftsmanNote);
          decimal = decimal * 80 + 10; // Not an actual percentage but the obtained value is more suited for UI/UX
          stars[i].fill = decimal + '%';
        }
      }
    return stars;
  }

}
