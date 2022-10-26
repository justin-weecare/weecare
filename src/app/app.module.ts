import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumDetailModalComponent } from './components/album-detail-modal/album-detail-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumComponent,
    AlbumDetailModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
