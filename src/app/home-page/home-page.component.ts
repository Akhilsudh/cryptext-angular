import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ngf } from "angular-file"

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  file:File;
  files:File[] = [];
  fileReader: FileReader;
  fileContent: String;

  lastFileAt:Date;
  dragFiles:any;
  validComboDrag:any;
  lastInvalids:any;
  fileDropDisabled:any;
  maxSize:any;
  baseDropValid:any;


  constructor(private router: Router, private ds: DataService) { }

  fileChanged(e: any) {
    this.file = e.target.files[0];
    this.fileReader = new FileReader();
  }

  testFile() {
    console.log('hello');
    if(this.file) {
      this.fileReader = new FileReader();
      this.fileReader.onload = (e: Event) => {
        this.fileContent = this.fileReader.result as String;
        console.log(this.file.name);
        console.log(this.fileContent);
        this.ds.setData(this.fileContent, 'akhil');
      }
      this.fileReader.readAsText(this.file);
    }
    else {
      console.log('Please select a file')
    }
  }

  openDocument() {
    if(this.fileReader) {
      this.fileReader.onload = (e: Event) => {
        this.fileContent = this.fileReader.result as String;
        console.log(this.fileContent);
        this.ds.setData(this.fileContent, 'akhil');
        this.router.navigate(['/decrypt']);
      }
      this.fileReader.readAsText(this.file);
    }
    else {
      console.log('Please select a file')
    }
  }

  createDocument() {
    this.router.navigate(['/encrypt']);
  }

  getDate(){
    return new Date()
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    this.file = null;
    console.log('File data destroyed');
  }

  ngOnInit(): void {
  }

}
