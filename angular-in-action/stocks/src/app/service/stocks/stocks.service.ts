import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StockInterface} from '../../model/StockInterface';

@Injectable()
export class StocksService {

  private stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
  private service = 'https://angular2-in-action-api.herokuapp.com';

  constructor(private http: HttpClient) {
  }

  getStockNames(): Array<string> {
    return this.stocks.slice();
  }

  add(stock: string): Array<string> {
    this.stocks.push(stock);
    return this.getStockNames();
  }

  remove(stock: string): Array<string> {
    this.stocks.splice(this.stocks.indexOf(stock), 1);
    return this.getStockNames();
  }

  load(symbols: Array<string>): Observable<Array<StockInterface>> {
    if (symbols) {
      return this.http.get<Array<StockInterface>>(this.service + '/stocks/snapshot?symbols=' + symbols.join());
    }
  }

}
