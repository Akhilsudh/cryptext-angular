import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  file:File;
  fileReader: FileReader;
  fileContent: String;

  constructor(private router: Router) { }

  fileChanged(e: any) {
    this.file = e.target.files[0];
    this.fileReader = new FileReader();
  }

  uploadDocument() {
    this.fileReader.onload = (e: Event) => {
      this.fileContent = this.fileReader.result as String;
      console.log(this.fileContent);
      this.router.navigate(['/decrypted'], {state: {data: this.fileContent}});
    }
    this.fileReader.readAsText(this.file);
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    console.log('File data destroyed');
  }

  ngOnInit(): void {
  }

}
