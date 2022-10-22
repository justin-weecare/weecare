import { Component, Input, OnInit } from '@angular/core';

import { Album } from '../album/album.types';

@Component({
  selector: 'app-album-detail-modal',
  templateUrl: './album-detail-modal.component.html',
  styleUrls: ['./album-detail-modal.component.scss']
})
export class AlbumDetailModalComponent implements OnInit {
  @Input() album: Album | undefined;
  @Input() visible = false;

  constructor() { }

  ngOnInit(): void {
  }
}
