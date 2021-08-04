import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TaskService} from '../task.service';
import {Task} from 'src/app/model';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  // styleUrls: ['./task-list.component.css']
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
  }

  ngOnInit() {
  }

  addTask(title: string) {
    const task: Task = {
      title, done: false
    };
    this.taskService.addTask(task);
    this.tasks = this.taskService.getTasks();
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks();
  }

}
