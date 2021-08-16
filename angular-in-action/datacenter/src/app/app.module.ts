import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NavbarComponent} from './component/navbar/navbar.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {MetricComponent} from './component/metric/metric.component';
import {NodesComponent} from './component/nodes/nodes.component';
import {NodeRowComponent} from './component/node-row/node-row.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    MetricComponent,
    NodesComponent,
    NodeRowComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
