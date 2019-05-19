import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';
import { HttpXsrfCookieExtractor } from '@angular/common/http/src/xsrf';

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
  // baseURL: string = 'https://5b905f7b3ef10a001445d02e.mockapi.io/tasks/';
  baseURL = 'http://localhost:8000/api/tasks/';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.baseURL);
  }

  getTask(id): Observable<Task> {
    return this.http.get<Task>(`${this.baseURL}${id}`);
  }

  createTask(task: Task): Observable<Task> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     Authorization: 'csrftoken'
    //   })
    // };
    return this.http.post<Task>(this.baseURL, task);
  }

  deleteTask(id: number): Observable<Task> {
    return this.http.delete<Task>(`${this.baseURL}${id}`);
  }

  getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + '=') {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
}
