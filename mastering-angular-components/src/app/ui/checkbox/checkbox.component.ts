import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mac-checkbox',
  templateUrl: './checkbox.component.html',
  // styleUrls: ['./checkbox.component.css']
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit {

  @Input() label: string;
  @Input() checked: boolean;

  @Output() outCheck = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
  }

  check(checked: boolean) {
    this.outCheck.emit(checked);
  }

}
