import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Task } from '../task';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: Task;
  taskID: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskdataService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => this.taskService.getTask(params.get('task_id')))
      )
      .subscribe(
        task => {
          console.log('task-details.component, getting single task', task);
          this.task = task[0];
        },
        error => {
          console.log(error);
        }
      );
  }

  deleteTask(id: number) {
    console.log('click event happened, delete task', id);
    this.taskService.deleteTask(id).subscribe(
      deletedTask => {
        console.log(
          'task-details.component, successfully deleted task',
          deletedTask
        );
        this.router.navigateByUrl('/tasks');
      },
      error => {
        console.log(error);
      }
    );
  }
}
