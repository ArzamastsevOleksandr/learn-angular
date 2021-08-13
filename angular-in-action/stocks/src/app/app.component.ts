import {Component} from '@angular/core';
import {StockInterface} from './model/StockInterface';
import {StocksService} from './service/stocks/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  stocks: Array<StockInterface>;

  constructor(private stocksService: StocksService) {
    stocksService.load(['AAPL'])
      .subscribe(stocks => {
        this.stocks = stocks;
      });
  }

}
