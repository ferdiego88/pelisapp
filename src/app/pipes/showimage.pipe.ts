import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showimage'
})
export class ShowimagePipe implements PipeTransform {

  transform(value: string, tamano: string): string {
    const imagePath = `http://image.tmdb.org/t/p/${tamano}`;
    const path = imagePath + value;
    return path;
  }

}
