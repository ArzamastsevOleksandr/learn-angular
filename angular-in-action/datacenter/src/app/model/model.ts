export interface Metric {
  used: number;
  available: number;
}

export interface Node {
  name: string;
  cpu: Metric;
  mem: Metric;
}
