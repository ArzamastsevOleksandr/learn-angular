import {Component, Input} from '@angular/core';

const DANGER_THRESHOLD = 0.7;

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent {

  @Input() title = '';
  @Input() description = '';

  private _used = 0;
  private _max = 100;

  @Input()
  set used(value: number) {
    if (isNaN(value)) {
      value = 0;
    }
    this._used = value;
  }

  get used(): number {
    return this._used;
  }

  @Input()
  set max(value: number) {
    if (isNaN(value)) {
      value = 100;
    }
    this._max = value;
  }

  get max(): number {
    return this._max;
  }

  isDanger(): boolean {
    return this.used / this.max > DANGER_THRESHOLD;
  }

}
