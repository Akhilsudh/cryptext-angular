import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private data: String = '';
  
  setData(data: String) {
    this.data = data;
  }

  getData() {
    return this.data;
  }

  clearData() {
    this.data = '';
  }
}
