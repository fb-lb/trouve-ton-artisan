import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  displayElement(elementId: string) {
    // Prevent simultaneous display of search bar and menu
    if (elementId == "menu") {
      (document.getElementById('search-bar'))?.classList.replace('block', 'hidden');
    } else {
      (document.getElementById('menu'))?.classList.replace('block', 'hidden');
    }
    
    // Display or hide the desired element
    let element = document.getElementById(elementId);
    if (element?.classList.contains('hidden')) {
      element?.classList.replace('hidden','block');
    } else {
      element?.classList.replace('block','hidden');
    }
  }

}
