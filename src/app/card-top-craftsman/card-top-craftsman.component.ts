import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-top-craftsman',
  templateUrl: './card-top-craftsman.component.html',
  styleUrl: './card-top-craftsman.component.scss',
})
export class CardTopCraftsmanComponent {

  @Input() craftsmanData:any = {};

  ngOnInit():void {
    this.setStarFilling();
  }

  // Used for the tackBy for each star generated by the ngFor in card-top-craftsman.componenet.html
  starId(index: number, star: any): number {
    return star.id;
  }

  stars:any[] = [
    {
      id: "star-1",
      fill: "0%"
    },
    {
      id: "star-2",
      fill: "0%"
    },
    {
      id: "star-3",
      fill: "0%"
    },
    {
      id: "star-4",
      fill: "0%"
    },
    {
      id: "star-5",
      fill: "0%"
    }
  ];
  
  setStarFilling() {
    let craftsmanNote = parseFloat(this.craftsmanData.note);
    for (let i=0; i < this.stars.length; i++) {
      if (i+1 <= craftsmanNote) {
        this.stars[i].fill = "100%";
      } else if (craftsmanNote - i > 0) {
        let decimal = 1 - (i+1-craftsmanNote);
        decimal = (decimal * 80) + 10; // Not an actual percentage but the obtained value is more suited for UI/UX
        this.stars[i].fill = decimal + "%";
      }
    }
  }
}
