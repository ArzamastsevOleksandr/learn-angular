import {Component, OnDestroy, OnInit} from '@angular/core';
import {Metric, Node} from '../../model/model';

const REFRESH_PERIOD_MILLIS = 5000;

const CPU_COUNT = 16;
const MEMORY_COUNT = 48;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  cpu: Metric;
  mem: Metric;

  cluster1: Node[];
  cluster2: Node[];

  interval: any;

  private static randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor(Math.random() * max) + min;
  }

  private static getEmptyMetricInstance() {
    return {used: 0, available: 0};
  }

  ngOnInit() {
    this.generateData();
    this.interval = setInterval(() => {
      this.generateData();
    }, REFRESH_PERIOD_MILLIS);
  }

  private generateData() {
    this.cluster1 = [];
    this.cluster2 = [];

    this.cpu = DashboardComponent.getEmptyMetricInstance();
    this.mem = DashboardComponent.getEmptyMetricInstance();

    for (let i = 1; i < 4; ++i) {
      this.cluster1.push(this.randomNode(i));
    }
    for (let i = 4; i < 7; ++i) {
      this.cluster2.push(this.randomNode(i));
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  private randomNode(i: number): Node {
    const node = {
      name: 'node' + i,
      cpu: {available: CPU_COUNT, used: DashboardComponent.randomInteger(0, CPU_COUNT)},
      mem: {available: MEMORY_COUNT, used: DashboardComponent.randomInteger(0, MEMORY_COUNT)}
    };
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;

    return node;
  }

}
