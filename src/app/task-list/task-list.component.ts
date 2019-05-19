import { Component, OnInit } from '@angular/core';
import { TASKS } from '../tasks-data';
import { Task } from '../task';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  tyMsg: string;

  constructor(private taskService: TaskdataService) {}

  ngOnInit() {
    this.taskService.getTasks().subscribe(data => {
      console.log('task-list component, getting tasks', data);
      // now lets save the data in our tasks variable
      this.tasks = data;
    });
  }

  // addNewTask(task: Task) {
  //   console.log('a new task has been added', task);
  //   this.tasks.push(task);
  //   this.tyMsg = 'Thank you my child for sending a new task.';
  // }

  deleteTask(id: number) {
    console.log('click event happened, delete task', id);
    this.taskService.deleteTask(id).subscribe(
      deletedTask => {
        console.log(
          'task-list.component, successfully deleted task',
          deletedTask
        );
        this.tasks = this.tasks.filter(task => deletedTask.id !== task.id);
      },
      error => {
        console.log(error);
      }
    );
  }
}
// <app-book-new (newBook)='addBook($event)'>
