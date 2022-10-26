import { Component, Input } from '@angular/core';

import { Album } from '../album/album.types';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-album-detail-modal',
  templateUrl: './album-detail-modal.component.html',
  styleUrls: ['./album-detail-modal.component.scss']
})
export class AlbumDetailModalComponent {
  @Input() album: Album | undefined;
  modalName = 'albumDetail';

  constructor(private modalService: ModalService) {}

  get visible(): boolean {
    return this.modalService.modals[this.modalName]['visible'];
  }

  get albumReleaseDate(): string {
    if (!this.album) return '';
    return new Date(this.album?.releaseDate).toLocaleDateString();
  }

  closeModal() {
    this.modalService.setVisibility(this.modalName, false);
  }
}
