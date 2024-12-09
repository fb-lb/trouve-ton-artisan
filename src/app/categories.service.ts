import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  category = new BehaviorSubject<string>('');
  categorySelected$ = this.category.asObservable();

  setCategory(newValue:string) {
    this.category.next(newValue);
  }

  constructor() { }
}
