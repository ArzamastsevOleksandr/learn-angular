import {Component, OnInit} from '@angular/core';
import {StockInterface} from '../../model/StockInterface';
import {StocksService} from '../../service/stocks/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks: Array<StockInterface>;
  symbols: Array<string>;

  constructor(private stocksService: StocksService) {
    this.symbols = stocksService.getStockNames();
  }

  ngOnInit() {
    this.stocksService.load(this.symbols)
      .subscribe(stocks => this.stocks = stocks);
  }

}
