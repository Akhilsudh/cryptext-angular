import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  file:File;
  fileReader: FileReader;
  fileContent: String;

  constructor(private router: Router, private ds: DataService) { }

  fileChanged(e: any) {
    this.file = e.target.files[0];
    this.fileReader = new FileReader();
  }

  uploadDocument() {
    if(this.fileReader) {
      this.fileReader.onload = (e: Event) => {
        this.fileContent = this.fileReader.result as String;
        console.log(this.fileContent);
        this.ds.setData(this.fileContent);
        this.router.navigate(['/decrypted']);
        // this.router.navigate(['/decrypted'], {state: {data: this.fileContent}});
      }
      this.fileReader.readAsText(this.file);
    }
    else {
      console.log('Please select a file')
    }
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    this.file = null;
    console.log('File data destroyed');
  }

  ngOnInit(): void {
  }

}
