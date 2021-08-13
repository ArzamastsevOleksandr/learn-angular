import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {StocksService} from './service/stocks/stocks.service';
import {SummaryComponent} from './component/summary/summary.component';
import {DashboardComponent} from './component/dashboard/dashboard.component';
import {ManageComponent} from './component/manage/manage.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
