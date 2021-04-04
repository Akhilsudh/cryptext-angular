import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms';
import { DecryptComponent } from './decrypt/decrypt.component';
import { EncryptComponent } from './encrypt/encrypt.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ngfModule } from "angular-file";
import { GenericModalComponent } from './generic-modal/generic-modal.component';
import { HelpComponent } from './help/help.component'

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DecryptComponent,
    EncryptComponent,
    GenericModalComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    NgbModule,
    ngfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
