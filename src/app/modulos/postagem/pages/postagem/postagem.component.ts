import { Component, OnInit } from '@angular/core';
import { PostagemDto } from '../../interfaces/postagem.dto';
import { PostagemService } from '../../postagem.service';
import { finalize, first } from 'rxjs/operators';

@Component({
  selector: 'app-postagem',
  templateUrl: './postagem.component.html',
  styleUrls: ['./postagem.component.css']
})
export class PostagemComponent implements OnInit {
  public loading: boolean = false
  public postagem: PostagemDto[] = [];

  constructor(private postagemService: PostagemService) { }

  ngOnInit() {

    this.loading = true;
    this.postagemService.getPosts()
      .pipe(first(), finalize(() => {
        this.loading = false;
      })).subscribe(resp => {
        this.postagem = resp

      })
  }

}


