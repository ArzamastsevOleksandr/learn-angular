import {Component} from '@angular/core';
import {StocksService} from '../../service/stocks/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {

  symbols: Array<string>;
  stock: string;

  constructor(private stocksService: StocksService) {
    this.symbols = stocksService.getStockNames();
  }

  add() {
    this.symbols = this.stocksService.add(this.stock.toUpperCase());
    this.stock = '';
  }

  remove(symbol: string) {
    this.symbols = this.stocksService.remove(symbol);
  }

}
