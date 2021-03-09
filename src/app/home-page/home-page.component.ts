import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  file:any;
  fileReader: FileReader;

  constructor(private router: Router) { }

  fileChanged(e) {
    this.file = e.target.files[0];
    this.fileReader = new FileReader();
  }

  uploadDocument() {
    this.fileReader.onload = (e) => {
      console.log(this.fileReader.result);
    }
    this.fileReader.readAsText(this.file);
    this.router.navigate(['/decrypted']);
  }

  ngOnInit(): void {
  }

}
