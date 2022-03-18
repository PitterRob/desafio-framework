import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoDto } from './interfaces/todos.dto';
import { Observable } from 'rxjs';
import { URL_API } from 'src/app/app.api';

@Injectable({
  providedIn: 'root'
})
export class TodosService {


  constructor(private http: HttpClient) { }



  public getTodoStatus(status: string): Observable<TodoDto[]> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' })
    let params = new HttpParams();
    params = params.append("completed", status);

    return this.http.get<TodoDto[]>(
      `${URL_API}/albums`,
      {
        params,
        headers
      },
    )
  }



}
