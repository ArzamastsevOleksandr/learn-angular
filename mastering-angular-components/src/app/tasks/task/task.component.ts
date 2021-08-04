import {Component, HostBinding, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mac-task',
  templateUrl: './task.component.html',
  // styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskComponent implements OnInit {

  @Input() task: any;

  constructor() {
  }

  @HostBinding('class.done')
  get done(): boolean {
    return this.task && this.task.done;
  }

  ngOnInit() {
  }

}
