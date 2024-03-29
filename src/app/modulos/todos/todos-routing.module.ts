import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodosComponent } from './pages/todos/todos.component';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      component: TodosComponent,
    },
  ],
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
