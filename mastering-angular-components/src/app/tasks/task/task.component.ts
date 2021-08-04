import {Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {Task} from 'src/app/model';

@Component({
  selector: 'mac-task',
  templateUrl: './task.component.html',
  // styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit {

  @Input() task: any;
  @Output() outUpdateTask = new EventEmitter<Task>();

  constructor() {
  }

  @HostBinding('class.done')
  get done(): boolean {
    return this.task && this.task.done;
  }

  ngOnInit() {
  }

  updateTask(done: boolean) {
    this.outUpdateTask.emit({
      ...this.task,
      done
    });
  }

}
