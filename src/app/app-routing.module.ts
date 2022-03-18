import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'albuns',
    loadChildren: () =>
      import('./modulos/albuns/albuns.module').then(
        m => m.AlbunsModule,
      ),
  },
  {
    path: 'postagens',
    loadChildren: () =>
      import('./modulos/postagem/postagem.module').then(
        m => m.PostagemModule,
      ),
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./modulos/todos/todos.module').then(
        m => m.TodosModule,
      ),
  },
  { path: '**', redirectTo: 'home' },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
