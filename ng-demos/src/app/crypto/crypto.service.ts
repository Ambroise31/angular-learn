import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export type Coin = {
  name: string;
  symbol: string;
  price_usd: number;
}

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  coins: Coin[] = [];

  constructor(public http: HttpClient) {
  }

  fetchCryptoPrices() {

    this.http
      .get<any[]>('https://api.coinmarketcap.com/v1/ticker/')
      .subscribe((r: any[]) => {
        this.coins = r.map(coin => mapAnyToCoin(coin));
        console.log(this.coins);
      });
  }
}

function mapAnyToCoin(coin: any): Coin {
  return {
    name: coin.name,
    symbol: coin.symbol,
    price_usd: coin.price_usd
  }
}
