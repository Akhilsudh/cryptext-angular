import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // private data: String = '';
  // private passPhrase: String = '';
  data: String = '';
  
  // setData(data: String, passPhrase: String) {
  //   this.data = data;
  //   this.passPhrase = passPhrase;
  // }

  setData(data: String) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  // getData() {
  //   return this.data;
  // }

  // getPassPhrase() {
  //   return this.passPhrase;
  // }

  // clearData() {
  //   this.data = '';
  //   this.passPhrase = '';
  // }

  clearData() {
    this.data = '';
  }
}
