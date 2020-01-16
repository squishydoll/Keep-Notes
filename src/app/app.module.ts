import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { EditorComponent } from './editor/editor.component';
import { FillComponent } from './fill/fill.component';
import { NoteComponent } from './note/note.component';
import { ShortenPipe } from './_collaborators/shorten.pipe';
import { FilterPipe } from './_collaborators/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    EditorComponent,
    FillComponent,
    NoteComponent,
    ShortenPipe,
    FilterPipe
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
