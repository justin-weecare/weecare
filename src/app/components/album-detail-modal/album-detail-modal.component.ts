import { Component, Input } from '@angular/core';

import { Album } from '../album/album.types';

@Component({
  selector: 'app-album-detail-modal',
  templateUrl: './album-detail-modal.component.html',
  styleUrls: ['./album-detail-modal.component.scss']
})
export class AlbumDetailModalComponent {
  @Input() album: Album | undefined;
  @Input() visible = false;

  get albumReleaseDate(): string {
    if (!this.album) return '';
    return new Date(this.album?.releaseDate).toLocaleDateString();
  }
  closeModal() {
    this.visible = false;
  }
}
