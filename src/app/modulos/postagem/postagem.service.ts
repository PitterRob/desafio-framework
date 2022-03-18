import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL_API } from 'src/app/app.api';
import { PostagemDto } from './interfaces/postagem.dto';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  constructor(private http: HttpClient) { }


  public getPosts(): Observable<PostagemDto[]> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' })

    return this.http.get<PostagemDto[]>(
      `${URL_API}/posts`,
      {
        headers
      },
    )
  }
}
