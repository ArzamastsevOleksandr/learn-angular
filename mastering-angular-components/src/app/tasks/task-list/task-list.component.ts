import {Component, ViewEncapsulation} from '@angular/core';
import {TaskService} from '../task.service';
import {Task, TaskListFilterType} from 'src/app/model';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  // styleUrls: ['./task-list.component.css']
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent {

  tasks: Task[];
  filteredTasks: Task[];
  taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
  activeTaskFilterType: TaskListFilterType = 'all';

  constructor(private taskService: TaskService) {
    this.tasks = taskService.getTasks();
    this.filterTasks();
  }

  addTask(title: string) {
    const task: Task = {
      title, done: false
    };
    this.taskService.addTask(task);
    this.tasks = this.taskService.getTasks();
    this.filterTasks();
  }

  updateTask(task: Task) {
    this.taskService.updateTask(task);
    this.tasks = this.taskService.getTasks();
    this.filterTasks();
  }

  filterTasks() {
    this.filteredTasks = this.tasks.filter(task => {
      switch (this.activeTaskFilterType) {
        case 'all':
          return true;
        case 'open':
          return !task.done;
        case 'done':
          return task.done;
      }
    });
  }

  activateFilterType(type: TaskListFilterType) {
    this.activeTaskFilterType = type;
    this.filterTasks();
  }

}
