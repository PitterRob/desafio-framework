import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../album.service';
import { AlbumDto } from '../../interfaces/album.dto';
import { finalize, first } from 'rxjs/operators';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  public loading: boolean = false
  public albuns: AlbumDto[] = [];
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.loading = true;
    this.albumService.getAlbums()
      .pipe(first(), finalize(() => {
        this.loading = false;
      })).subscribe(resp => {
        this.albuns = resp

      })
  }

}
