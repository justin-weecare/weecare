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

  async ngOnInit(): Promise<void> {
    await this.fetchData();
  }

  async fetchData() {
    try {
      let response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
      if (response.ok) {
        this.albums = (await response.json() as any).feed.entry.map((album: any) => {
          return {
            title: album['im:name'].label,
            imageUrl: album['im:image'][album['im:image'].length - 1].label,
            artist: album['im:artist'].label,
            price: album['im:price'].label,
            itemCount: album['im:itemCount'].label,
            rights: album.rights.label,
            releaseDate: album['im:releaseDate'].label,
          };
        });
        this.filteredAlbums = this.albums;
      }
    } catch (e) {
      console.error(e);
    }
  }
}
