import { Component, OnInit } from '@angular/core';
import { debounce } from 'lodash';

import { Album } from './components/album/album.types';
import { AlbumService } from './services/album.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  albums: Album[] = [];
  filteredAlbums: Album[] = [];
  selectedAlbum: Album | undefined;
  searchString = '';
  onSearchStringChange = debounce(() => {
    const searchString = this.searchString.trim().toLowerCase();
    this.filteredAlbums = this.albums.filter(album => album.title.toLowerCase().includes(searchString) || album.artist.toLowerCase().includes(searchString));
  }, 200);

  constructor(private albumService: AlbumService, private modalService: ModalService) { }

  async ngOnInit(): Promise<void> {
    this.albums = await this.albumService.getAlbums();
    this.filteredAlbums = this.albums;
  }

  get isModalVisible(): boolean {
    return Object.values(this.modalService.modals).some(modal => modal['visible']);
  }

  onClickAlbum(album: Album) {
    this.selectedAlbum = album;
    this.modalService.setVisibility('albumDetail', true);
  }
}
