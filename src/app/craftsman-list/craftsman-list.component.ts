import { Component } from '@angular/core';
import { CardTopCraftsmanService } from '../card-top-craftsman.service';
import { CategoriesService } from '../categories.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-craftsman-list',
  templateUrl: './craftsman-list.component.html',
  styleUrl: './craftsman-list.component.scss'
})
export class CraftsmanListComponent {

  allData: any[] = [];
  currentCategory:string = "";
  private categorySubscription: Subscription = new Subscription();

  constructor(private craftsmanService:CardTopCraftsmanService, private categoriesService:CategoriesService) {}
  async ngOnInit():Promise<void> {
    this.allData = await this.craftsmanService.getDataCrafstman();
    this.categorySubscription = this.categoriesService.categorySelected$.subscribe(value => {
      this.currentCategory = value;
      this.setActiveClassButton(value);
    })
  }

  ngOnDestroy():void {
    if (this.categorySubscription) {
      this.categorySubscription.unsubscribe();
    }
  }

  buttonId:any = ['button-Bâtiment', 'button-Services', 'button-Fabrication', 'button-Alimentation'];

  setActiveClassButton(newId: string) {
    this.buttonId.forEach((id:string) => {
      let button = document.getElementById(id);
      if (button?.classList.contains("active")) {
        button?.classList.remove("active");
      }
    });

    if (this.currentCategory != "") {
      document.getElementById('button-'+ newId)?.classList.add('active');
    }
  }

  setCategorySelected(category:string) {
    if (this.currentCategory != category) {
      this.categoriesService.setCategory(category);
    } else {
      this.categoriesService.setCategory("");
    }
  }

  // Used for the tackBy for each craftsman card generated by the ngFor in craftsman-list.componenet.html
  craftsmanId(index: number, craftsman: any): number {
    return craftsman.id;
  }
}
