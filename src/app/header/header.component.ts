import { Component } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { SearchBarTextService } from '../search-bar-text.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private categoryService: CategoriesService, private searchBarTextService: SearchBarTextService) {}

  inputValue: string = "";
  currentCategory:string  = "";
  private categorySubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.categorySubscription = this.categoryService.categorySelected$.subscribe(value => {
      this.currentCategory = value;
      this.setActiveClassNavLink(value);
    });
  }

  ngOnDestroy():void {
    if(this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }

  idNavLink: any[] = ['link-Bâtiment', 'link-Services', 'link-Fabrication', 'link-Alimentation'];
  setActiveClassNavLink(newId: string) {
    this.idNavLink.forEach((id: string) => {
      let linkElement = document.getElementById(id);
      if (linkElement?.classList.contains("active")) {
        linkElement.classList.remove("active");
      }
    });
    document.getElementById('link-' + newId)?.classList.add('active');
  }

  setSearchBarText() {
    this.searchBarTextService.setSearchText(this.inputValue);
  }

  setCategory(categorySelected: string) {
    if (this.currentCategory != categorySelected) {
      this.categoryService.setCategory(categorySelected);
    } else {
      this.categoryService.setCategory("");
    }
  }

  // Control display of search bar and nav menu when width < 769px 
  displayElement(elementId: string) {
    // Prevent simultaneous display of search bar and menu
    if (elementId == "menu") {
      (document.getElementById('search-bar'))?.classList.replace('block', 'hidden');
    } else {
      (document.getElementById('menu'))?.classList.replace('block', 'hidden');
    }
    
    // Display or hide the desired element (search bar or menu)
    let element = document.getElementById(elementId);
    if (element?.classList.contains('hidden')) {
      element?.classList.replace('hidden','block');
    } else {
      element?.classList.replace('block','hidden');
    }
  }
}