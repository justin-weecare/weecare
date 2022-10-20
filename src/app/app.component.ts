import { Component, OnInit } from '@angular/core';

import { Album } from './components/album/album.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  albums: Album[] = [];
  filteredAlbums: Album[] = [];

  ngOnInit(): void {
    
  }
}
