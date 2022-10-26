import { Injectable } from "@angular/core";

import { Album } from "../components/album/album.types";

@Injectable({
    providedIn: 'root',
})
export class AlbumService {
    async getAlbums(): Promise<Album[]> {
        try {
            let response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
            if (response.ok) {
              const albums = (await response.json() as any).feed.entry.map((album: any) => {
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

              return albums;
            }

            return [];
          } catch (e) {
            console.error(e);
            throw e;
          }
    }
}