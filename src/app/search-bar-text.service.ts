import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchBarTextService {

  searchText = new BehaviorSubject<string>('');
  searchText$ = this.searchText.asObservable();

  setSearchText(newValue:string) {
    this.searchText.next(newValue);
  }

  constructor() { }
}
