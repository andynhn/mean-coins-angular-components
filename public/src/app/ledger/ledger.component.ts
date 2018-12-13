import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  coins = [];
  transactions = [];
  
  constructor(private _coinService: CoinService) { }
  
  ngOnInit() {
    this.getTransactions();
    this.getCoins();
    console.log(`Ledger Component. Coins: ${this.coins}`)
    console.log(`Ledger Component. Transactions: ${this.transactions}`)
  }
  getTransactions(){
    this.transactions = this._coinService.shareTransactions();
  }
  getCoins(){
    this.coins = this._coinService.shareCoins();
  }

}
