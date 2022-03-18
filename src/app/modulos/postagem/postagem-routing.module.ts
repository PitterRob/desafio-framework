import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostagemComponent } from './pages/postagem/postagem.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PostagemComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostagemRoutingModule { }
