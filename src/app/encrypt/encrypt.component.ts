import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { DataService } from '../services/data.service';
import { saveAs } from 'file-saver/dist/FileSaver';
import { pkcs5, cipher, util } from 'node-forge';

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
      var encrypted = this.aes_encrypt(this.text, this.passPhrase);
      this.blob = new Blob([encrypted as any], { type: 'text' });
      saveAs(this.blob, "hello.txt");
      this.blob = null;
    }
  }

  aes_encrypt(text: String, passPhrase: String): string {
    const key = pkcs5.pbkdf2(passPhrase, 'c1f01c0bfb90453a', 1000, 16);
    const c = cipher.createCipher('AES-CBC', key);
    c.start({ iv: 'c1f01c0bfb90453a' });
    c.update(util.createBuffer(text, 'utf8'));
    c.finish();
    var returnValue = util.encode64(c.output.getBytes());
    console.log(returnValue);
    return returnValue;
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
