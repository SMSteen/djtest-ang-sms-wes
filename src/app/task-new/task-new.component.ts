import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Task } from '../task';
import { TaskdataService } from '../taskdata.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {
  newTask: Task = new Task();
  @Output() addTask = new EventEmitter<Task>();
  @Input() parentData: string;

  constructor(private taskService: TaskdataService, private router: Router) {}

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault(); // we're preventing form submission to database so we can do stuff with our form
    console.log('submitting form', this.newTask);
    this.taskService.createTask(this.newTask).subscribe(data => {
      console.log('task-new.component, sending form to db', data);
      this.router.navigateByUrl('/tasks');
    });
    // send task to the parent
    // this.addTask.emit(this.newTask);
    // reset the form for the next go around
    // this.newTask = new Task();
    // form.reset();
  }
}
