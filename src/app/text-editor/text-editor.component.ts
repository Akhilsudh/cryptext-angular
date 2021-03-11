import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  public editorObj = ClassicEditor;
  routeData: any;
  public text: String;

  constructor(private router: Router, private ds: DataService) { 
    this.text = this.ds.getData();
    // if (this.router.getCurrentNavigation().extras.state) {
    //   this.routeData = this.router.getCurrentNavigation().extras.state;
    //   if (this.routeData) {
    //     this.text = this.routeData.data ? this.routeData.data : '';
    //   }
    // }
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
