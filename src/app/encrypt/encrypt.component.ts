import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { DataService } from '../services/data.service';
import { saveAs } from 'file-saver/src/FileSaver';

@Component({
  selector: 'app-encrypt',
  templateUrl: './encrypt.component.html',
  styleUrls: ['./encrypt.component.css']
})
export class EncryptComponent implements OnInit {
  public editorObj = ClassicEditor;
  public text: String;
  private blob: Blob;
  private passPhrase: String = '';
  private passPhraseConfirm: String = '';

  constructor(private router: Router, private ds: DataService) { 
    this.text = this.ds.getData();
  }

  password(value: String, flag: Boolean) {
    (flag) ? this.passPhrase = value : this.passPhraseConfirm = value;
  }

  encrypt() {
    if(this.passPhrase == '') {
      alert ('Please Enter Password');
    }
    else if(this.passPhraseConfirm == '') {
      alert ('Please Confirm Password');
    }
    else if(this.passPhrase != this.passPhraseConfirm) {
      alert ('The Passwords Do Not Match')
    }
    else {
      console.log('The passwords matched');
      console.log(this.passPhrase)
      this.blob = new Blob([this.text as any], { type: 'text' });
      saveAs(this.blob, "hello.txt");
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
