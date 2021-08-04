import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mac-enter-task',
  templateUrl: './enter-task.component.html',
  // styleUrls: ['./enter-task.component.css']
  encapsulation: ViewEncapsulation.None
})
export class EnterTaskComponent implements OnInit {

  @Output() outEnterTask = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  enterTask(titleInput: HTMLInputElement) {
    this.outEnterTask.emit(titleInput.value);
    titleInput.value = '';
    titleInput.focus();
  }

}
