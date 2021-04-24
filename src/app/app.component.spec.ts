import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ngfModule } from 'angular-file';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecryptComponent } from './decrypt/decrypt.component';
import { EncryptComponent } from './encrypt/encrypt.component';
import { GenericModalComponent } from './generic-modal/generic-modal.component';
import { HelpComponent } from './help/help.component';
import { HomePageComponent } from './home-page/home-page.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have as title CrypText', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('CrypText');
  });
});
