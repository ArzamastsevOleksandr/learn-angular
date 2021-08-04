import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'mac-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  encapsulation: ViewEncapsulation.None // enable global styles
})
export class AppComponent {
  title = 'mastering-angular-components';
}
