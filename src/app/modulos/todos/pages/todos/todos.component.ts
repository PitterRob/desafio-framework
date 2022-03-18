import { Component, OnInit } from '@angular/core';
import { TodoDto } from '../../interfaces/todos.dto';
import { TodosService } from '../../todos.service';
import { finalize, first } from 'rxjs/operators';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  public loading: boolean = false
  public completos: TodoDto[] = [];
  public incompletos: TodoDto[] = [];
  constructor(private todoService: TodosService) { }

  ngOnInit() {
    this.loading = true;
    this.todoService.getTodoStatus("true")
      .pipe(first(), finalize(() => {
        this.loading = false;
      })).subscribe(resp => {
        this.completos = resp

      })

    this.todoService.getTodoStatus("false")
      .pipe(first(), finalize(() => {
        this.loading = false;
      })).subscribe(resp => {
        this.incompletos = resp

      })
  }

}
