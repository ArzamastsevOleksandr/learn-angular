import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {Task, TaskListFilterType} from 'src/app/model';

@Component({
  selector: 'mac-task-list',
  templateUrl: './task-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListComponent {

  @Input() taskFilterTypes: TaskListFilterType[] = ['all', 'open', 'done'];
  @Input() activeTaskFilterType: TaskListFilterType;
  @Input() tasks: Task[];
  @Output() outAddTask = new EventEmitter<string>();
  @Output() outUpdateTask = new EventEmitter<Task>();
  @Output() outActivateFilterType = new EventEmitter<TaskListFilterType>();

  addTask(title: string) {
    this.outAddTask.emit(title);
  }

  updateTask(task: Task) {
    this.outUpdateTask.emit(task);
  }

  activateFilterType(type: TaskListFilterType) {
    this.outActivateFilterType.emit(type);
  }

}
