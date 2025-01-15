import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CraftsmanDataService {
  dataCraftsman = this.getData();

  async getData() {
    try {
      let dataJSON = await fetch('/assets/datas.json');
      let allData = await dataJSON.json();
      return allData;
    } catch (error: any) {
      error.name = "Problem getting craftsman datas in craftsman-data.services - " + error.name;
      alert('Le site web est malheureusement indisponible pour le moment, nous faisons tout le nécessaire pour le remettre en service. Veuillez nous excuser pour la gêne occasionnée.');
      throw error;
    }
  }

  getDataCrafstman() {
    return this.dataCraftsman;
  }

  constructor() {}
}
