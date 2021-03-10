import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  public editorObj = ClassicEditor;
  routeData: any;
  public model = {
    editorData: '<p>Hello, world!</p>'
  };
  public text: String;

  constructor(private router: Router) { 
    if (this.router.getCurrentNavigation().extras.state) {
      this.routeData = this.router.getCurrentNavigation().extras.state;
      if (this.routeData) {
        this.text = this.routeData.data ? this.routeData.data : '';
      }
    }
  }

  ngOnInit(): void {
  }
}
