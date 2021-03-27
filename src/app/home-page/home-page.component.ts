import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ngf } from "angular-file";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericModalComponent } from '../generic-modal/generic-modal.component';
import { AesTools } from '../aes-tools';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  file:File;
  fileReader: FileReader;
  fileContent: String;
  passPhrase: String;
  private aesToolsObj: AesTools;

  lastFileAt:Date;
  dragFiles:any;
  validComboDrag:any;
  lastInvalids:any;
  fileDropDisabled:any;
  maxSize:any;
  baseDropValid:any;


  constructor(private router: Router, private ds: DataService, private modalService: NgbModal) { }

  decryptContent() {
    console.log('hello');
    if(this.file) {
      if(this.passPhrase) {
        this.fileReader = new FileReader();
        this.fileReader.onload = (e: Event) => {
          this.fileContent = this.fileReader.result as String;
          console.log(this.file.name);
          console.log(this.passPhrase);
          console.log(this.fileContent);
          try {
            this.aesToolsObj = new AesTools(this.passPhrase);
            this.ds.setData(this.aesToolsObj.aes_decrypt(this.fileContent));
            this.router.navigate(['/decrypt']);
          }
          catch {
            this.ds.clearData();
            console.log('Wrong Password!');
            this.openModal('Wrong Password!');
          }
        }
        this.fileReader.readAsText(this.file);
      }
      else {
        console.log('Enter Password');
        this.openModal('Enter Password');
      }
    }
    else {
      console.log('Please select a file to decrypt');
      this.openModal('Please select a file to decrypt');
    }
  }

  openModal(message: String) {
    const modalRef = this.modalService.open(GenericModalComponent);
    modalRef.componentInstance.message = message;
  }

  getDate(){
    return new Date()
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    this.file = null;
    this.fileContent = '';
    this.passPhrase = '';
    console.log('File data destroyed');
  }

  ngOnInit(): void {
  }

}
