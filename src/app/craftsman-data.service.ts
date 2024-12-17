import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CraftsmanDataService {
  dataCraftsman = this.getData();

  // Faire un try/catch
  async getData() {
    try {
      let dataJSON = await fetch('/assets/datas.json');
      let allData = await dataJSON.json();
      return allData;
    } catch (error) {
      console.error(error);
    }
  }

  getDataCrafstman() {
    return this.dataCraftsman;
  }

  constructor() {}
}
