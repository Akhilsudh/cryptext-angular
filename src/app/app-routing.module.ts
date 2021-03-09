import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextEditorComponent } from './text-editor/text-editor.component'
import { HomePageComponent } from './home-page/home-page.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'decrypted', component: TextEditorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
