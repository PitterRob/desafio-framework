import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API } from 'src/app/app.api';
import { AlbumDto } from './interfaces/album.dto';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  
  constructor(private http: HttpClient) { }
  
  public getAlbums(): Observable<AlbumDto[]> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' })

    return this.http.get<AlbumDto[]>(
      `${URL_API}/albums`,
      {
        headers
      },
    )
  }
}
