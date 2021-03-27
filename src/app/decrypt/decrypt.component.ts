import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { saveAs } from 'file-saver/dist/FileSaver';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GenericModalComponent } from '../generic-modal/generic-modal.component';
import { DataService } from '../services/data.service';
import { AesTools } from '../aes-tools';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.css']
})
export class DecryptComponent implements OnInit {
  public editorObj = ClassicEditor;
  public text: String;
  public fileName: String = '';
  private blob: Blob;
  private passPhrase: String = '';
  private passPhraseConfirm: String = '';
  private aesToolsObj: AesTools;

  constructor(private router: Router, private ds: DataService, private modalService: NgbModal) {
    this.text = this.ds.getData();
    this.ds.clearData();
    console.log(this.ds.getData());
  }

  password(value: String, flag: Boolean) {
    (flag) ? this.passPhrase = value : this.passPhraseConfirm = value;
  }

  openModal(message: String) {
    const modalRef = this.modalService.open(GenericModalComponent);
    modalRef.componentInstance.message = message;
  }

  encrypt() {
    if(this.text == '') {
      this.openModal('Please Enter Text to Encrypt');
    }
    else if(this.passPhrase == '') {
      this.openModal('Please Enter Password');
    }
    else if(this.passPhraseConfirm == '') {
      this.openModal('Please Confirm Password');
    }
    else if(this.passPhrase != this.passPhraseConfirm) {
      this.openModal('The Passwords Do Not Match');
    }
    else if(this.fileName == '') {
      this.openModal('Please Provide a File Name');
    }
    else {
      console.log('The passwords matched');
      this.aesToolsObj = new AesTools(this.passPhrase);
      var encrypted = this.aesToolsObj.aes_encrypt(this.text);
      this.blob = new Blob([encrypted as any], { type: 'text' });
      saveAs(this.blob, this.fileName + '.txt');
      this.blob = null;
    }
  }

  @HostListener('unloaded')
  ngOnDestroy() {
    this.text = '';
    this.ds.clearData();
    console.log('File data destroyed');
  }

  ngOnInit(): void {
  }
}
