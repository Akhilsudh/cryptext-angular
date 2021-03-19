import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: String = '';
  private passPhrase: String = '';
  
  setData(data: String, passPhrase: String) {
    this.data = data;
    this.passPhrase = passPhrase;
  }

  getData() {
    return this.data;
  }

  getPassPhrase() {
    return this.passPhrase;
  }

  clearData() {
    this.data = '';
    this.passPhrase = '';
  }
}
