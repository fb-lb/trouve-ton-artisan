import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardTopCraftsmanService {

  // Faire un try/catch
  async getDataCrafstman() {
    try {
      let dataJSON = await fetch('/assets/datas.json');
      let dataCraftsman = await dataJSON.json();
      return dataCraftsman;
    } catch (error) {
      console.error(error);
    }
  }

  constructor() { }
}
