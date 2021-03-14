import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { DataService } from '../services/data.service';
import { pkcs5, cipher, util } from 'node-forge';

@Component({
  selector: 'app-decrypt',
  templateUrl: './decrypt.component.html',
  styleUrls: ['./decrypt.component.css']
})
export class DecryptComponent implements OnInit {
  public editorObj = ClassicEditor;
  public text: String;

  constructor(private router: Router, private ds: DataService) { 
    this.text = this.aes_decrypt(this.ds.getData(), 'akhil');
  }

  aes_decrypt(text: String, passPhrase: String): string {
    const key = pkcs5.pbkdf2(passPhrase, '9bx03e6e4ftowc6a44gkgx5hiv71mgb6', 1000, 16);
    const d = cipher.createDecipher('AES-CBC', key);
    d.start({ iv: '9vfko0kqr4ihi5c7' });
    d.update(new util.ByteStringBuffer(util.decode64(text)));
    d.finish();
    var returnValue = d.output.toString();
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
