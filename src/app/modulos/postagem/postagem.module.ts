import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostagemRoutingModule } from './postagem-routing.module';
import { PostagemComponent } from './pages/postagem/postagem.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [PostagemComponent],
  imports: [
    CommonModule,
    PostagemRoutingModule,
    SharedModule
  ]
})
export class PostagemModule { }
