import {Component, Input} from '@angular/core';
import {Node} from '../../model/model';

@Component({
  selector: '[app-node-row]',
  templateUrl: './node-row.component.html',
  styleUrls: ['./node-row.component.css']
})
export class NodeRowComponent {

  @Input() node: Node;

  isDanger(prop) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }

}
