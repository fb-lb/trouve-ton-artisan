import { Component } from '@angular/core';
import { CardTopCraftsmanService } from '../card-top-craftsman.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  allData: any[] = [];
  topCraftsmansData:any[] = [];

  constructor(private craftsmanService:CardTopCraftsmanService) {}
  async ngOnInit():Promise<void> {
    this.allData = await this.craftsmanService.getDataCrafstman();
    this.topCraftsmansData = [...this.allData];
    this.topCraftsmansData = this.topCraftsmansData.filter((craftsman) => craftsman.top == true);
  }
}
